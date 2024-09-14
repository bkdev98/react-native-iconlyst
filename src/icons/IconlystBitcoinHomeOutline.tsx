import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBitcoinHomeOutline = ({
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
      d="M17.466 21.747H7.035a4.077 4.077 0 0 1-4.072-4.072v-7.173a3.7 3.7 0 0 1 1.369-2.88l5.573-4.54a3.73 3.73 0 0 1 4.69 0l5.574 4.54a3.7 3.7 0 0 1 1.369 2.88v7.173a4.077 4.077 0 0 1-4.072 4.072m-5.216-18a2.2 2.2 0 0 0-1.4.495L5.276 8.783A2.2 2.2 0 0 0 4.46 10.5v7.173a2.575 2.575 0 0 0 2.572 2.572h10.43a2.575 2.575 0 0 0 2.573-2.572v-7.17a2.2 2.2 0 0 0-.816-1.716l-5.57-4.54a2.2 2.2 0 0 0-1.4-.496z"
    />
    <Path
      fill={props.color}
      d="M12.582 16.654h-2.174a.75.75 0 0 1-.75-.75v-3.02a.75.75 0 0 1 .75-.75h2.11a2.313 2.313 0 0 1 2.313 2.04 2.26 2.26 0 0 1-2.249 2.48m-1.424-1.5h1.424a.756.756 0 0 0 .755-.835.8.8 0 0 0-.82-.684h-1.359z"
    />
    <Path
      fill={props.color}
      d="M12.582 13.631h-2.174a.75.75 0 0 1-.75-.75V9.865a.75.75 0 0 1 .75-.75h2.11a2.313 2.313 0 0 1 2.313 2.04 2.26 2.26 0 0 1-2.249 2.48zm-1.424-1.5h1.424a.76.76 0 0 0 .755-.836.8.8 0 0 0-.82-.683h-1.359zM11.98 17.548a.75.75 0 0 1-.75-.75v-.89a.75.75 0 1 1 1.5 0v.89a.75.75 0 0 1-.75.75"
    />
    <Path
      fill={props.color}
      d="M11.98 10.615a.75.75 0 0 1-.75-.75v-.89a.75.75 0 1 1 1.5 0v.89a.75.75 0 0 1-.75.75"
    />
  </Svg>
);
export default IconlystBitcoinHomeOutline;
