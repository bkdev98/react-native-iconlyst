import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystHeartPokerCardOutline = ({
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
      d="M15.25 21.75h-6A4.756 4.756 0 0 1 4.5 17V7a4.756 4.756 0 0 1 4.75-4.75h6A4.756 4.756 0 0 1 20 7v10a4.756 4.756 0 0 1-4.75 4.75m-6-18A3.254 3.254 0 0 0 6 7v10a3.254 3.254 0 0 0 3.25 3.25h6A3.254 3.254 0 0 0 18.5 17V7a3.254 3.254 0 0 0-3.25-3.25z"
    />
    <Path
      fill={props.color}
      d="M16.25 6.76A.752.752 0 1 1 17 6v.01a.75.75 0 0 1-.75.75M8.25 18.76a.753.753 0 0 1-.537-1.28A.753.753 0 0 1 9 18v.01a.75.75 0 0 1-.75.75M12.254 16.005c-.307 0-.604-.106-.841-.3-.208-.17-.437-.346-.676-.528-1.4-1.071-3.145-2.4-2.934-4.534a2.96 2.96 0 0 1 1.352-2.216 2.74 2.74 0 0 1 2.422-.253q.357.126.672.338.165-.113.343-.2a2.8 2.8 0 0 1 2.565.019 2.87 2.87 0 0 1 1.517 2.14c.319 2.2-1.54 3.634-2.9 4.683-.215.166-.423.326-.614.484a1.5 1.5 0 0 1-.438.277q-.227.09-.468.09m-1.643-6.5c-.233 0-.46.066-.656.192a1.49 1.49 0 0 0-.66 1.1c-.128 1.292 1.134 2.256 2.353 3.188.208.159.412.315.6.467.214-.18.409-.33.61-.485 1.478-1.141 2.51-2.044 2.33-3.275a1.38 1.38 0 0 0-.724-1.031 1.32 1.32 0 0 0-1.207 0c-.17.084-.323.2-.448.342a.76.76 0 0 1-.868.185.75.75 0 0 1-.253-.185 1.5 1.5 0 0 0-.611-.41 1.4 1.4 0 0 0-.466-.088"
    />
  </Svg>
);
export default IconlystHeartPokerCardOutline;
