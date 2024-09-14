import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystChristmasTreeBroken = ({
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
      d="M12 3.615c-1.639 3.267-3.478 6.247-5.617 8.753h2.584c-1 2.03-2.198 3.806-3.604 5.318h13.274q-2.106-2.27-3.604-5.318h2.584c-1.476-1.73-2.81-3.685-4.033-5.805"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M15.69 13.647c-1.478.8-3.56 1.272-5.305 1.544M15.42 9.502c-2.285.17-3.718-.139-5.906-1.41M12.002 17.718v3.897"
    />
  </Svg>
);
export default IconlystChristmasTreeBroken;
