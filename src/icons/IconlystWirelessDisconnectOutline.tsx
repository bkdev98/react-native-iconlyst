import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystWirelessDisconnectOutline = ({
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
      d="M3.328 3.428a.75.75 0 0 1 1.06.03l2.777 2.938a1 1 0 0 1 .076.08L19.455 19.4a.75.75 0 0 1-1.09 1.03l-2.39-2.529-2.062 2.18c-.877.928-2.356.928-3.233 0m0 0-7.518-7.953a2.225 2.225 0 0 1-.169-2.867A11.7 11.7 0 0 1 5.5 6.818l-2.202-2.33a.75.75 0 0 1 .03-1.06m.86 6.74a10.2 10.2 0 0 1 2.353-2.249zm2.353-2.249 8.402 8.89-2.12 2.24a.725.725 0 0 1-1.053.001l-7.518-7.953a.725.725 0 0 1-.063-.93m8.108-4.03c-.317 0-.634.016-.94.049a.75.75 0 0 1-.157-1.492c.36-.038.729-.057 1.097-.057 3.796 0 7.164 1.804 9.302 4.607a2.23 2.23 0 0 1-.165 2.878l-1.894 1.999a.75.75 0 0 1-1.089-1.032l1.895-1.999a.73.73 0 0 0 .06-.936 10.17 10.17 0 0 0-8.11-4.017"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystWirelessDisconnectOutline;
