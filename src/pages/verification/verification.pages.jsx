import { useState, useEffect } from "react";
import { Result, message, Alert, Typography } from "antd";
import { Button } from "../../components/button/button.component";
import {
  VerificationButtonWrapper,
  VerificationIllustration,
  VerificationWrapper,
} from "./verification.styles";
import VerificationInput from "../../components/verification-input/verification-input.component";
import { verifyUser, resendEmail } from "../../API/API.request";
import { reload } from "../../utils/helper";
import { useUser } from "../../hook/useUser";
import { setPageTitle } from "../../utils/setPageTitle";

const Verification = () => {
  const [code, setCode] = useState({
    1: "",
    2: "",
    3: "",
    4: "",
    5: "",
    6: "",
  });
  const { code: verificationCode } = useUser();

  const [loading, setLoading] = useState(false);
  const [resendLoading, setResendLoading] = useState(false);
  const verification_code = Object.values(code).join("");

  useEffect(() => {
    setPageTitle("Verify Your Account");
  }, []);

  const resendCode = async () => {
    const response = await resendEmail();
    if (response.status) {
      message.success("Verification code sent");
    }
  };
  const handleVerify = async () => {
    if (verification_code.length == 6) {
      setLoading(true);
      const response = await verifyUser({ code: verification_code });
      if (response.status) {
        message.success("Verification successful");
        reload();
      } else {
        if (response.message == "INVALID_CODE")
          message.error("Invalid verification code");
        else message.error("Something went wrong");
      }
      setLoading(false);
    } else {
      message.error("Please enter a valid verification code");
    }
  };

  return (
    <VerificationWrapper>
      {verificationCode && (
        <Alert
          message="Email Service Temporarily Unavailable"
          description={
            <div>
              <p>
                Our email service is currently not working. Please use the
                following verification code to continue:
              </p>
              <Typography.Title
                level={3}
                style={{
                  textAlign: "center",
                  margin: "10px 0",
                  color: "#1890ff",
                }}
              >
                {verificationCode}
              </Typography.Title>
            </div>
          }
          type="info"
          showIcon
          style={{ marginBottom: 20, maxWidth: 600, margin: "0 auto 20px" }}
        />
      )}
      <Result
        style={{ padding: 30 }}
        icon={
          <VerificationIllustration
            src="/verification.svg"
            alt="verification"
          />
        }
        title="Please verify your email"
        subTitle="Please check your email for the verification code we've just sent you."
      />
      <VerificationInput
        code={code}
        setCode={setCode}
        handleVerify={handleVerify}
      />
      <VerificationButtonWrapper>
        <Button type="default" loading={resendLoading} onClick={resendCode}>
          Resend
        </Button>
        &nbsp;&nbsp;&nbsp;
        <Button type="primary" loading={loading} onClick={handleVerify}>
          Verify
        </Button>
      </VerificationButtonWrapper>
    </VerificationWrapper>
  );
};
export default Verification;
