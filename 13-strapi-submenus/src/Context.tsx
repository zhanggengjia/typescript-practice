import { createContext, useState, useContext, type ReactNode } from 'react';

type AppContextType = {
  openSidebar: () => void;
  closeSidebar: () => void;
  isSidebarOpen: boolean;
  pageId: string | null;
  setPageId: React.Dispatch<React.SetStateAction<string | null>>;
};

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider = ({ children }: { children: ReactNode }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);
  const [pageId, setPageId] = useState<string | null>(null);

  const openSidebar = () => {
    setIsSidebarOpen(true);
  };
  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <AppContext.Provider
      value={{
        openSidebar,
        closeSidebar,
        isSidebarOpen,
        pageId,
        setPageId,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = (): AppContextType => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useGlobalContext must be used within an AppProvider');
  }
  return context;
};
