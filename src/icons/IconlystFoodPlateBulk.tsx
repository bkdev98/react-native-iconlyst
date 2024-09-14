import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystFoodPlateBulk = ({
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
      d="M4.026 10.402c-.902 0-1.623.79-1.515 1.697a9.94 9.94 0 0 0 5.034 7.494 4.5 4.5 0 0 0 2.19.552h4.533c.752 0 1.51-.175 2.182-.55a9.97 9.97 0 0 0 4.605-5.551 9.8 9.8 0 0 0 .434-1.938 1.527 1.527 0 0 0-1.515-1.704z"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      d="M16.999 4.704a.75.75 0 1 0-1.328-.697l-1.548 2.945q-.22.075-.431.172L13.1 4.345a.75.75 0 1 0-1.467.312l.311 1.465a4.813 4.813 0 0 0-7.1 4.28h1.5v-.045a3.313 3.313 0 0 1 6.203-1.62 3.3 3.3 0 0 1 .426 1.664h1.5v-.044c0-.621-.122-1.225-.34-1.775a2.65 2.65 0 0 1 1.316-.344c1.31 0 2.406.93 2.662 2.163h1.52a4.22 4.22 0 0 0-3.715-3.638z"
    />
    <Path
      fill={props.color}
      d="M8.748 10.4c.146-.377.461-.675.853-.796a.75.75 0 0 0-.443-1.433 2.85 2.85 0 0 0-1.96 2.23z"
    />
  </Svg>
);
export default IconlystFoodPlateBulk;
