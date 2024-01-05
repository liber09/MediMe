"use client"
import React, { useState, useEffect } from "react";
import ChatRoom from "@/app/_components/chatRoom/ChatRoom";
import styles from './page.module.scss';
import { healthcareProviderData } from '../../types/interfaces';
import { getHealthCareProviderData } from "../api/healthcareProviders/getHealthCareProviders";
import HealthcareProvidersDropdown from '../../_components/chooseHealthCareCenter/chooseHealthCareCenter';

const Chat: React.FC = () => {
  const [hasActiveChat, setHasActiveChat] = useState<boolean>(false);
  const [healthCareProviders, sethealthCareProviders] = useState<healthcareProviderData | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const binId = process.env.NEXT_PUBLIC_HC_PROVIDERS_BIN_ID;
        const apiKey = process.env.NEXT_PUBLIC_HC_PROVIDERS_API_KEY; 
    
        console.log('BIN ID:', binId);
        console.log('API Key:', apiKey);
    
        if (!binId || !apiKey) {
          console.error('Healthcare provider API credentials are missing.');
          return;
        }
    
        const jsonData: healthcareProviderData = await getHealthCareProviderData(binId, apiKey);
    
        sethealthCareProviders(jsonData);
      } catch (error) {
        console.error('Error fetching healthcare provider data:', error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    console.log('Healthcare Providers Data:', healthCareProviders);
  }, [healthCareProviders]);

  useEffect(() => {
    // Simulate checking if there is an active chat (you need to replace this with your actual logic)
    const checkActiveChat = () => {
      // Your logic to check if there's an active chat (e.g., checking a state, API call, etc.)
      // For the sake of this example, I'm using a setTimeout to simulate an asynchronous operation.
      setTimeout(() => {
        const isChatActive = false;
        setHasActiveChat(isChatActive);
      }, 1000); // Simulating a delay, replace with actual logic
    };

    checkActiveChat();
  }, []); // Empty dependency array ensures the effect runs only once when the component mounts

  return (
    <>
      {isLoading ? (
        <p>Laddar...</p>
      ) : (
        <section>
          <h1 className={styles.pageTitle}>
            {hasActiveChat
              ? "Chatta med din vårdcentral"
              : "Chatta med din vårdcentral"}
          </h1>
          <section className={styles.chatContent}>
            {!hasActiveChat && <HealthcareProvidersDropdown healthcareProviders={healthCareProviders?.healthcareProviders || []} />}
            {hasActiveChat && <ChatRoom />}
          </section>
        </section>
      )}
    </>
  );
};
export default Chat;
