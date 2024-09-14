import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystFemaleBulk = ({
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
      d="M13.3 11.89a2.08 2.08 0 0 0-2.58-.003c-.253.2-.44.508-.614.858-.178.358-.379.838-.635 1.447l-1.469 3.502c-.17.404-.306.73-.398.996-.093.27-.158.527-.15.786.02.798.495 1.513 1.223 1.841.236.106.498.146.783.165.282.018.635.018 1.073.018h2.937c.437 0 .79 0 1.07-.018.286-.019.547-.058.782-.165a2.08 2.08 0 0 0 1.225-1.837c.007-.259-.056-.515-.149-.785a18 18 0 0 0-.395-.996l-1.46-3.501c-.254-.61-.454-1.09-.632-1.449-.173-.35-.358-.659-.611-.86"
    />
    <Path
      fill={props.color}
      d="M12.017 2.5a3.283 3.283 0 1 0 0 6.565 3.283 3.283 0 0 0 0-6.565"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystFemaleBulk;
