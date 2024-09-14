import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystWebflowBulk = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M21.904 5.636c-.542-.482-3.356.411-4.085 1.153-.718.732-1.132 1.71-1.533 2.656l-.493 1.158c-.085.203-.188.444-.293.69l-.793-5.751a.5.5 0 0 0-.564-.427c-3.678.508-4.642 3.155-5.493 5.49q-.172.478-.358.96c-.084-1.101-.175-2.146-.44-3.17-.347-1.348-1.366-2.988-4.251-3.155a.497.497 0 0 0-.522.579l2.028 12.65a.5.5 0 0 0 .493.421h.023c3.78-.167 4.797-2.736 5.78-5.222q.147-.374.3-.753l.84 5.48a.5.5 0 0 0 .444.422c1.988.208 3.539-.506 4.247-1.935 1.248-2.512 2.382-5.127 3.48-7.657q.652-1.51 1.315-3.013a.5.5 0 0 0-.125-.576"
      clipRule="evenodd"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystWebflowBulk;
