import * as React from 'react';
import Svg, { G, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystLoginTwoTone = ({
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
      <Path d="M15.813 12.022H3.771M12.885 9.106l2.928 2.916-2.928 2.916" />
      <Path
        d="M8.504 7.389v-.933a3.684 3.684 0 0 1 3.685-3.684h4.884a3.675 3.675 0 0 1 3.675 3.675v11.14a3.685 3.685 0 0 1-3.685 3.685h-4.885a3.675 3.675 0 0 1-3.674-3.675v-.942"
        opacity={0.4}
      />
    </G>
  </Svg>
);
export default IconlystLoginTwoTone;
