import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystVanOutline = ({
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
      d="M7.164 15.775a1.19 1.19 0 0 0-1.187 1.185q0 .162.048.316l.004.014a1.176 1.176 0 0 0 1.127.86 1.245 1.245 0 0 0 1.152-.86q.039-.166.043-.333a1.19 1.19 0 0 0-1.187-1.182m1.937 1.188h.75a2.688 2.688 0 0 0-5.374 0v.005c.001.249.038.496.11.733a2.676 2.676 0 0 0 2.578 1.948h.014a2.745 2.745 0 0 0 2.58-1.974 3 3 0 0 0 .092-.7zM17.894 15.78c-.167 0-.331.032-.482.096a1.2 1.2 0 0 0-.396.27 1.1 1.1 0 0 0-.244.389 1.1 1.1 0 0 0-.062.443l.002.064q-.002.146.04.291c.068.228.213.434.418.583.206.15.46.233.724.233.265 0 .52-.083.725-.233a1.12 1.12 0 0 0 .415-.573 1.4 1.4 0 0 0 .042-.322l.75.012-.748-.055a1.1 1.1 0 0 0-.061-.443 1.1 1.1 0 0 0-.245-.39 1.2 1.2 0 0 0-.395-.27 1.25 1.25 0 0 0-.483-.096m2.682 1.287a2.6 2.6 0 0 0-.15-1.047 2.6 2.6 0 0 0-.574-.915 2.7 2.7 0 0 0-.894-.612 2.75 2.75 0 0 0-2.128 0c-.336.142-.64.35-.894.611a2.6 2.6 0 0 0-.573.916 2.6 2.6 0 0 0-.151 1.037q0 .357.1.697l.001.004a2.62 2.62 0 0 0 .974 1.371c.466.34 1.03.52 1.607.52s1.142-.18 1.608-.52a2.62 2.62 0 0 0 .98-1.396 3 3 0 0 0 .094-.666"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M8.352 16.963a.75.75 0 0 1 .75-.75h6.86a.75.75 0 0 1 0 1.5h-6.86a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M4.657 5.852A1.407 1.407 0 0 0 3.25 7.258v7.608a1.407 1.407 0 0 0 1.407 1.407h.31a.75.75 0 0 1 0 1.5h-.31a2.907 2.907 0 0 1-2.907-2.907V7.258a2.907 2.907 0 0 1 2.907-2.906H17.64a2.63 2.63 0 0 1 2.15 1.13l.002.001 3 4.3c.302.447.462.976.458 1.515v.005l-.05 3.567a2.9 2.9 0 0 1-2.897 2.903h-.33a.75.75 0 1 1 0-1.5h.33A1.395 1.395 0 0 0 21.7 14.87v-.014l.05-3.569v-.002a1.17 1.17 0 0 0-.198-.658L18.56 6.34l-.002-.002a1.13 1.13 0 0 0-.922-.485z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M13.094 11.74a.75.75 0 0 1 .75-.75h8.627a.75.75 0 0 1 0 1.5h-8.627a.75.75 0 0 1-.75-.75M4.975 11.74a.75.75 0 0 1 .75-.75h5.192a.75.75 0 0 1 0 1.5H5.725a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M13.844 4.41a.75.75 0 0 1 .75.75v11.802a.75.75 0 0 1-1.5 0V5.16a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystVanOutline;
