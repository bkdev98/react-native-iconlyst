import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystStarLampBold = ({
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
      fill={props.color}
      fillRule="evenodd"
      d="m19.287 7.933-3.717-.535a.61.61 0 0 1-.463-.331l-1.662-3.322a1.6 1.6 0 0 0-.696-.696 1.62 1.62 0 0 0-2.195.701L8.893 7.066a.62.62 0 0 1-.467.333l-3.707.534a1.6 1.6 0 0 0-.944.476 1.59 1.59 0 0 0-.446 1.14c.007.426.182.825.49 1.122l2.69 2.582a.59.59 0 0 1 .173.528l-.637 3.65a1.616 1.616 0 0 0 2.339 1.69l1.925-.958-.673 2.97a.996.996 0 0 0 .973 1.233h2.784a.997.997 0 0 0 .974-1.226l-.67-2.98 1.91.954c.308.163.667.22 1.013.168.425-.07.8-.3 1.052-.65a1.6 1.6 0 0 0 .285-1.208l-.636-3.644a.59.59 0 0 1 .174-.53l2.688-2.58a1.6 1.6 0 0 0-.895-2.737"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystStarLampBold;
