import { Alert } from "react-bootstrap"

const Message = ({ variant, children }) => {
  return <Alert variant={variant}>{children}</Alert>
};

Message.defaultProps = {
    vaiant: 'info',
};

export default Message
