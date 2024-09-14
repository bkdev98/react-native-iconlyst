import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystTapMoveBroken = ({
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
      d="M12.753 20.909c-2.293.385-4.98-.067-6.138-1.506-1.142-1.42-2.029-3.143-2.589-4.686-.3-.828.141-1.721.963-2.037a1.69 1.69 0 0 1 1.994.619l1.105 1.602V6.044a1.544 1.544 0 0 1 3.088-.024l.062 3.995c2.161.206 5.29.095 6.164 2.453.879 2.374.014 5.515-1.527 7.056M14.982 5.129l-.834.834.834.834M16.232 8.044l.834.834.834-.834M16.232 3.874l.834-.834.834.834M19.151 5.129l.834.834-.834.834M19.986 5.96h-5.838M17.066 3.043v5.838"
    />
  </Svg>
);
export default IconlystTapMoveBroken;
