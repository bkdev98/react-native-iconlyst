import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCallSilentLightcurved = ({
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
      d="M6.109 13.058c-4.586-5.362-3.738-7.93-3.1-8.833.095-.17 2.399-3.61 4.86-1.593 4.852 4.003 1 4.385 1.743 6.922M11.585 12.314c4.927 4.746 4.3-2.728 9.278 3.313 2.028 2.473-1.422 4.766-1.592 4.862-.997.722-4.108 1.688-10.87-4.99M2 21.5 20.5 3"
    />
  </Svg>
);
export default IconlystCallSilentLightcurved;
