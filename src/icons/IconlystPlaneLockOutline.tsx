import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPlaneLockOutline = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      d="M7.138 16.016a4.4 4.4 0 0 1-4.073-3.035c-.06-.142-.237-.572-.372-.9l-.144-.35a.75.75 0 1 1 1.384-.575l.147.353.135.328 1.73-.733 1.7-.721-1.963-4.756a.75.75 0 0 1 .442-.993q.273-.1.535-.2.63-.26 1.293-.431a2.66 2.66 0 0 1 2.438.75 182 182 0 0 1 3.438 3.068l.009.01c1.11-.485 2.05-.892 3.04-1.25a3.98 3.98 0 0 1 3.014.009 2.34 2.34 0 0 1 1.19 1.5c.443 1.578-.77 2.893-2.082 3.447a587 587 0 0 1-9.8 4.052 5.6 5.6 0 0 1-2.061.427m-2.273-2.824c.86 1.327 2.128 1.666 3.78 1 3.477-1.4 6.89-2.826 9.772-4.042.607-.256 1.432-.91 1.222-1.66a.84.84 0 0 0-.432-.567 2.5 2.5 0 0 0-1.818.068c-.96.347-1.888.75-2.916 1.2a1.41 1.41 0 0 1-1.66-.271 182 182 0 0 0-3.41-3.044c-.544-.475-.874-.474-1.1-.42a8 8 0 0 0-.936.309l1.952 4.73a.75.75 0 0 1-.4.979c-.606.252-1.493.629-2.382 1.007-.59.252-1.172.499-1.675.71zM12.379 20.732H5.104a.75.75 0 1 1 0-1.5h7.275a.75.75 0 0 1 0 1.5M20.038 21.3h-2.424a1.955 1.955 0 0 1-1.952-1.954v-1.36a1.955 1.955 0 0 1 1.952-1.953h2.424a1.955 1.955 0 0 1 1.953 1.953v1.36a1.955 1.955 0 0 1-1.953 1.953m-2.424-3.767a.453.453 0 0 0-.452.453v1.36a.453.453 0 0 0 .452.453h2.424a.453.453 0 0 0 .453-.453v-1.36a.453.453 0 0 0-.453-.453z"
    />
    <Path
      fill={props.color}
      d="M20.271 17.555a.75.75 0 0 1-.75-.75v-.9a.68.68 0 0 0-.209-.48.77.77 0 0 0-.5-.2.69.69 0 0 0-.687.683v.896a.75.75 0 1 1-1.5 0v-.9a2.19 2.19 0 0 1 2.168-2.172c.582.001 1.142.225 1.564.625a2.19 2.19 0 0 1 .66 1.546v.9a.75.75 0 0 1-.746.752"
    />
  </Svg>
);
export default IconlystPlaneLockOutline;
