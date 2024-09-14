import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBreadBulk = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      d="M12.965 20.392c1.236.654 2.585 1.138 3.861.89 1.465-.284 2.503-1.593 3.236-2.778 3.98-6.436-.74-14.592-8.221-15.725-1.752-.265-3.668-.128-5.334.485-1.525.561-3.38 1.776-3.855 3.416-.56 1.928.441 3.854 1.48 5.426 2.287 3.46 5.146 6.33 8.833 8.286"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      d="M16.387 4.704a.75.75 0 0 0-.722-.777h-.017l-.028-.001h-.089a4 4 0 0 0-.296.02 5.7 5.7 0 0 0-.99.198c-.81.234-1.866.718-2.911 1.704a.75.75 0 1 0 1.03 1.09c.849-.801 1.686-1.176 2.298-1.353.307-.09.558-.129.726-.146a3 3 0 0 1 .223-.013h.004a.75.75 0 0 0 .772-.722M18.837 8.155c-.533-.027-2.271.122-3.762 1.75a.75.75 0 0 1-1.106-1.014c1.873-2.044 4.098-2.278 4.946-2.233a.75.75 0 0 1-.078 1.497M20.627 10.394a.75.75 0 0 1-.05 1.5h-.041999999999999996q-.057 0-.185.013c-.168.017-.419.056-.726.145-.612.178-1.45.553-2.299 1.355a.75.75 0 0 1-1.03-1.091c1.046-.987 2.102-1.47 2.912-1.704.403-.117.744-.172.99-.197a4 4 0 0 1 .385-.021h.045"
    />
  </Svg>
);
export default IconlystBreadBulk;
