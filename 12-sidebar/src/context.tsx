import { createContext, useState, useContext, type ReactNode } from 'react';

// 1. 定義 context 內容的型別
type AppContextType = {
  isSidebarOpen: boolean;
  isModalOpen: boolean;
  openSidebar: () => void;
  closeSidebar: () => void;
  openModal: () => void;
  closeModal: () => void;
};

// 2. 建立 context，初始值為 null，稍後由 Provider 提供實值
const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider = ({ children }: { children: ReactNode }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const openSidebar = () => {
    setIsSidebarOpen(true);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  const openModal = () => {
    console.log('openModal');
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <AppContext.Provider
      value={{
        isSidebarOpen,
        isModalOpen,
        openModal,
        openSidebar,
        closeModal,
        closeSidebar,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

// 4. 建立 custom hook，帶有 undefined 錯誤檢查
export const useGlobalContext = (): AppContextType => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useGlobalContext must be used within an AppProvider');
  }
  return context;
};
