import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystStickerNoteTwoTone = ({
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
      d="M15.026 21c.559 0 1.093-.228 1.479-.63l3.792-3.95c.365-.381.57-.89.57-1.42V6.836A3.81 3.81 0 0 0 17.21 3H9.444l-.09.001a3.75 3.75 0 0 0-3.67 3.834v10.508A3.746 3.746 0 0 0 9.445 21z"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M15.51 20.938v-2.893a2.56 2.56 0 0 1 2.554-2.56h2.739M4.133 16.967h3.325m-3.325-4.966h3.325M4.133 7.035h3.325"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystStickerNoteTwoTone;
