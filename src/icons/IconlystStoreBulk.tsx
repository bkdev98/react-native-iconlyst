import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystStoreBulk = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M15.626 12.258a.32.32 0 0 0-.367 0 4.9 4.9 0 0 1-2.79.883 4.9 4.9 0 0 1-2.787-.882.32.32 0 0 0-.367 0c-.794.548-1.74.882-2.752.882a5.05 5.05 0 0 1-2.076-.46c-.21-.095-.462.052-.462.283v5.459c.004.908.362 1.76 1.007 2.399a3.36 3.36 0 0 0 2.376.979h10.097c.882.03 1.758-.343 2.403-.98a3.37 3.37 0 0 0 1.007-2.39v-5.467c0-.23-.251-.377-.462-.282a5 5 0 0 1-2.075.459c-1.014 0-1.958-.335-2.752-.883"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      d="M21.236 4.872c.013.055.367 1.646.596 3.236.114.793-.139 1.595-.713 2.259-.68.784-1.73 1.272-2.74 1.272-1.062 0-2.022-.512-2.66-1.294a.376.376 0 0 0-.572.002 3.43 3.43 0 0 1-2.678 1.292 3.43 3.43 0 0 1-2.677-1.29.376.376 0 0 0-.57-.003c-.638.781-1.598 1.293-2.659 1.293-1.01 0-2.062-.488-2.74-1.272-.575-.664-.829-1.466-.714-2.26.23-1.59.583-3.18.598-3.247.246-1.237 1.335-2.048 2.776-2.061h11.941c1.458 0 2.562.814 2.812 2.073M15.567 19.327a.75.75 0 0 1-1.5 0v-1.2c0-.877-.717-1.59-1.598-1.59-.88 0-1.597.713-1.597 1.59v1.2a.75.75 0 0 1-1.5 0v-1.2a3.098 3.098 0 0 1 6.195 0z"
    />
  </Svg>
);
export default IconlystStoreBulk;
