import * as React from 'react';
import Svg, { Path, G } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMicrosoftExelBulk = ({
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
      d="M16.625 15.48c0 .13.09.22.21.22h3.74a.3.3 0 0 0 .3-.3v-2.14a.3.3 0 0 0-.3-.3h-3.65a.3.3 0 0 0-.3.3z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M15.125 15.48v-2.22a.3.3 0 0 0-.3-.3h-1.66a.3.3 0 0 0-.3.3v.89c0 2.05-1.37 3.47-3.34 3.47h-2.48a.283.283 0 0 0-.289.3c.126 1.673 1.298 3 3.079 3h7.95c1.82 0 3.09-1.32 3.09-3.21v-.21a.3.3 0 0 0-.3-.3h-3.74c-.94 0-1.71-.77-1.71-1.72"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M9.525 16.119c1.14 0 1.84-.75 1.84-1.97v-4.3c0-1.23-.69-1.97-1.84-1.97h-4.56c-1.14 0-1.84.76-1.84 1.97v4.3c0 1.22.7 1.97 1.84 1.97z"
      clipRule="evenodd"
      opacity={0.4}
    />
    <G fill={props.color} fillRule="evenodd" clipRule="evenodd" opacity={0.4}>
      <Path d="M16.625 11.16a.3.3 0 0 0 .3.3h3.65a.3.3 0 0 0 .3-.3V9.01a.3.3 0 0 0-.3-.3h-3.65a.3.3 0 0 0-.3.3zM14.825 11.46a.3.3 0 0 0 .3-.3V9.01a.3.3 0 0 0-.3-.3h-1.711c-.203 0-.348.198-.312.397q.064.354.063.743v1.31a.3.3 0 0 0 .3.3zM11.697 7.133a.32.32 0 0 0 .204.077h2.924a.3.3 0 0 0 .3-.3c0-1.072.006-2.831.009-3.53 0-.166-.134-.3-.3-.3h-5c-1.78 0-2.953 1.328-3.078 3-.012.165.123.3.289.3h2.48c.865 0 1.603.271 2.172.753M17.785 3.08h-.878a.3.3 0 0 0-.3.301c.004.721.015 2.557.017 3.53a.3.3 0 0 0 .3.3h3.65a.3.3 0 0 0 .3-.3v-.62c0-1.89-1.27-3.21-3.09-3.21" />
    </G>
    <Path
      fill={props.color}
      d="m6.365 14.3.79-1.05.08.11.7.94c.15.2.37.3.6.3.16 0 .31-.04.45-.14.33-.25.4-.72.15-1.05l-1.05-1.42 1.05-1.41a.75.75 0 0 0-.15-1.05.75.75 0 0 0-1.05.16l-.7.94-.08.11-.79-1.05a.75.75 0 0 0-1.05-.16.75.75 0 0 0-.15 1.05l1.05 1.41-1.05 1.42c-.25.33-.18.8.15 1.05.34.25.81.17 1.05-.16"
    />
  </Svg>
);
export default IconlystMicrosoftExelBulk;
