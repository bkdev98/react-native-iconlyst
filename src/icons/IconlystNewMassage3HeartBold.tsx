import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystNewMassage3HeartBold = ({
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
      fillRule="evenodd"
      d="M12.76 16.372H7.922a.75.75 0 0 1 0-1.5h4.836a.75.75 0 0 1 0 1.5M7.922 10.62h1.974a.75.75 0 0 1 0 1.5H7.923a.75.75 0 0 1 0-1.5m10.546.471c-.329 0-.657-.08-.956-.243-.368-.2-3.63-2.04-4.526-4.828v-.003a4.8 4.8 0 0 1 .088-3.232H7.498c-3.118 0-5.214 2.192-5.214 5.454v7.845c0 3.262 2.096 5.454 5.214 5.454h8.324c3.12 0 5.215-2.192 5.215-5.454V9.768c-.784.611-1.45.99-1.606 1.076-.3.164-.63.246-.962.246"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M20.185 2.566a2.26 2.26 0 0 0-1.716.153 2.25 2.25 0 0 0-1.724-.152c-1.201.387-1.813 1.72-1.394 3.033v.001c.556 1.724 2.784 2.953 2.879 3.005a.5.5 0 0 0 .479 0c.096-.054 2.339-1.3 2.875-3.006.42-1.313-.192-2.645-1.4-3.034"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystNewMassage3HeartBold;
