import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSleighBroken = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 24 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M5.479 17.962c-1.715-.616-3.025.766-2.67 2.244a2.076 2.076 0 0 0 2.018 1.592h7.43M18.873 16.79c-.01.702-.562 1.34-1.265 1.34H9.072c-.429 0-.82-.242-1.013-.624L5.431 12.28c-.304-.604-.013-1.357.659-1.432 1.122-.127 2.502.155 3.181 1.983.97 2.615 4.374 2.258 5.332-.404 1.893-4.33 4.097-5.252 5.75-5.202.728.022 1.02.855.682 1.498a19.3 19.3 0 0 0-1.757 4.787M9.371 21.798l1.394-3.669M18.447 21.798l-1.394-3.669"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M18.592 7.529c.28-1.21 1.724-2.35 1.724-2.35-1.24-1.258-2.9.262-3.861-1.748-1.233.938-1.284 3.283-1.284 3.283-2.853.315-4.54 1.484-5.415 2.758M15.248 6.688l1.8 1.75M21.25 21.798h-5.848"
    />
  </Svg>
);
export default IconlystSleighBroken;
