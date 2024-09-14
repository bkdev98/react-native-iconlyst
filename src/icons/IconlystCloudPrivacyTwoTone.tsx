import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCloudPrivacyTwoTone = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M19.064 16.473A4.14 4.14 0 0 0 21.5 12.7c0-2.596-1.83-4.139-4.103-4.14 0-1.634-1.28-4.899-4.897-4.899S7.603 6.925 7.603 8.558C5.333 8.578 3.5 10.103 3.5 12.7c0 1.68 1 3.125 2.436 3.774"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.5 20.47s2.88-.872 2.88-3.276c0-2.303.104-2.49-.127-2.723s-2.375-.979-2.753-.979c-.377 0-2.522.748-2.753.98-.231.23-.127.418-.127 2.722 0 2.404 2.88 3.276 2.88 3.276"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystCloudPrivacyTwoTone;
