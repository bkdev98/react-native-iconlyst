import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMicrosoftPowerpointTwoTone = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M5.992 16.69a8.22 8.22 0 0 0 6.769 3.54c4.516 0 8.198-3.64 8.238-8.147v-.08A8.236 8.236 0 0 0 6.173 7.066"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M21.001 12.086h-8.378M12.625 3.766V9.49"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M5.557 7.063h4.51c1.576 0 2.556 1.113 2.556 2.687v4.249c0 1.574-.98 2.687-2.557 2.687h-4.51C3.982 16.686 3 15.573 3 13.999v-4.25c0-1.573.986-2.687 2.557-2.687"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M6.604 12.502h1.522a1.342 1.342 0 1 0 0-2.686H6.604v4.369"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystMicrosoftPowerpointTwoTone;
