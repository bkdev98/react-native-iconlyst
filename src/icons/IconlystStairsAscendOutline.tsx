import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystStairsAscendOutline = ({
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
      fill={props.color}
      d="M21.695 4.943a.75.75 0 0 1-.75.75h-3.75v3.243c0 .673-.545 1.218-1.218 1.218h-3.282v3.392c0 .673-.546 1.218-1.218 1.218H8.195v3.169c0 .673-.546 1.218-1.218 1.218H3a.75.75 0 0 1 0-1.5h3.695v-3.169c0-.673.545-1.218 1.217-1.218h3.283V9.872c0-.673.545-1.218 1.218-1.218h3.282V5.41c0-.672.545-1.217 1.218-1.217h4.032a.75.75 0 0 1 .75.75M15.564 18.795a.75.75 0 0 1-.22-.531l.005-3.108a.749.749 0 1 1 1.5.003l-.002 1.293 3.623-3.622a.75.75 0 1 1 1.06 1.061l-3.62 3.62 1.288-.003a.75.75 0 0 1 .752.749.75.75 0 0 1-.749.751l-3.105.007c-.2 0-.39-.079-.532-.22"
    />
  </Svg>
);
export default IconlystStairsAscendOutline;
