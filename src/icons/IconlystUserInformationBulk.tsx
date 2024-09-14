import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystUserInformationBulk = ({
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
      d="M13.221 6.742a.3.3 0 0 1-.3.3h-1.54a.3.3 0 0 1-.3-.3V4.117a.3.3 0 0 1 .3-.3h1.54a.3.3 0 0 1 .3.3zm8.092 2.808c-.1-2.8-1.9-4.6-4.6-4.6h-2.1v-.8c0-1-.7-1.8-1.8-1.8h-1.6c-1 0-1.8.7-1.8 1.8v.8h-1.8c-2.8 0-4.7 2-4.7 4.9v6.9c0 2.9 1.9 4.9 4.7 4.9h9c2.8 0 4.7-2 4.7-4.9.1 0 .1-7.1 0-7.2"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      d="M14.669 11.578h3.137a.822.822 0 1 0 0-1.645h-3.137a.822.822 0 1 0 0 1.645M14.669 14.787h3.137a.822.822 0 1 0 0-1.646h-3.137a.822.822 0 1 0 0 1.646M15.624 18.152h2.182a.822.822 0 1 0 0-1.646h-2.182a.823.823 0 0 0 0 1.645M6.023 16.815c0 1.54 2.388 1.54 3.235 1.54.848 0 3.236 0 3.236-1.54 0-.309-.077-.617-.31-.848-.461-.462-1.308-.693-2.926-.693-.847 0-3.235 0-3.235 1.54M11.492 11.963a2.235 2.235 0 0 0-2.234-2.234 2.235 2.235 0 1 0 2.234 2.234"
    />
  </Svg>
);
export default IconlystUserInformationBulk;
