import * as React from 'react';
import Svg, { G, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystVideoTwoTone = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    viewBox="0 0 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <G
      fill="none"
      fillRule="evenodd"
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
    >
      <Path d="M16.297 15.538c.08 1.832-1.398 3.382-3.302 3.46-.14.005-6.98-.008-6.98-.008-1.895.143-3.554-1.219-3.703-3.044-.012-.136-.009-7.474-.009-7.474-.084-1.834 1.393-3.387 3.299-3.468.142-.007 6.972.006 6.972.006 1.904-.142 3.568 1.23 3.716 3.064.01.132.007 7.464.007 7.464" />
      <Path
        d="m16.3 9.98 3.293-2.695c.816-.668 2.04-.086 2.039.967L21.62 15.6c-.001 1.053-1.226 1.63-2.04.962l-3.28-2.695"
        opacity={0.4}
      />
    </G>
  </Svg>
);
export default IconlystVideoTwoTone;
