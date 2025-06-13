import { SignIn } from "@clerk/nextjs";

const SignInPage = () => {
  return (
    <main className="flex h-screen w-full items-center justify-center">
      <SignIn
        appearance={{
          variables: {
            colorPrimary: "#18cef2",
            colorBackground: "#0a0c14",
            colorText: "#f2f2f2",
            colorTextSecondary: "#94a3b8",
            colorInputBackground: "rgba(24, 206, 242, 0.1)",
            colorInputText: "#f2f2f2",
            colorDanger: "#ef4444",
          },
          elements: {
            // Make all social button text white
            socialButtonsBlockButtonText: {
              color: "#ffffff",
            },
            // Optional: hover effect or background fix
            socialButtonsBlockButton: {
              backgroundColor: "#1e293b", // muted dark background
              color: "#ffffff",
              borderRadius: "6px",
            },
          },
        }}
      />
    </main>
  );
};

export default SignInPage;
