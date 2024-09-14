import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystWebPageCheckOutline = ({
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
      fillRule="evenodd"
      d="M3.997 4.099c.96-1.03 2.327-1.606 3.94-1.606h8.189c1.616 0 2.984.575 3.944 1.606.954 1.025 1.449 2.439 1.449 4.023v3.937a.75.75 0 0 1-1.5 0v-1.764H4.044v5.542c0 1.276.395 2.302 1.047 3.002.646.693 1.6 1.128 2.846 1.128h1.7a.75.75 0 0 1 0 1.5h-1.7c-1.616 0-2.984-.575-3.944-1.606-.954-1.025-1.449-2.439-1.449-4.024V8.122c0-1.585.498-2.999 1.453-4.023m.047 4.696h15.975v-.673c0-1.275-.395-2.3-1.047-3-.646-.695-1.6-1.13-2.846-1.13H7.937c-1.241 0-2.195.435-2.843 1.13-.653.7-1.05 1.726-1.05 3zm1.693-2.106a.75.75 0 0 1 .75-.75h.056a.75.75 0 0 1 0 1.5h-.056a.75.75 0 0 1-.75-.75m2.414 0a.75.75 0 0 1 .75-.75h.055a.75.75 0 0 1 0 1.5h-.055a.75.75 0 0 1-.75-.75m2.413 0a.75.75 0 0 1 .75-.75h.056a.75.75 0 0 1 0 1.5h-.056a.75.75 0 0 1-.75-.75m11.26 8.77a.75.75 0 0 1 0 1.06l-4.765 4.768a.75.75 0 0 1-1.062 0l-2.312-2.317a.75.75 0 0 1 1.061-1.06l1.783 1.786 4.235-4.237a.75.75 0 0 1 1.06 0"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystWebPageCheckOutline;
