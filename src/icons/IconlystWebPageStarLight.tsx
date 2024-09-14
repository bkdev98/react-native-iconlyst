import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystWebPageStarLight = ({
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
      d="M20.86 11.898V7.925C20.86 5.038 19.065 3 16.176 3H7.91C5.03 3 3.225 5.038 3.225 7.925v7.786c0 2.887 1.797 4.925 4.685 4.925h1.716M6.503 6.478h-.056m2.492 0h-.056m2.492 0h-.055M20.86 9.36H3.226"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m17.947 15.889-.736-1.472a.5.5 0 0 0-.888 0l-.737 1.473a.5.5 0 0 1-.375.267l-1.648.238a.487.487 0 0 0-.274.835l1.193 1.145c.116.112.17.274.143.434l-.283 1.617a.494.494 0 0 0 .72.517l1.474-.765a.51.51 0 0 1 .462 0l1.473.764a.495.495 0 0 0 .72-.516l-.281-1.617a.48.48 0 0 1 .142-.434l1.192-1.145a.488.488 0 0 0-.274-.836l-1.65-.236a.5.5 0 0 1-.373-.269"
    />
  </Svg>
);
export default IconlystWebPageStarLight;
