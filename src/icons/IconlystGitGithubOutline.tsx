import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystGitGithubOutline = ({
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
      d="M3.99 3.897C4.976 2.841 6.379 2.25 8.034 2.25h8.435c1.66 0 3.062.59 4.045 1.648C21.492 4.948 22 6.399 22 8.026v7.948c0 1.627-.508 3.078-1.487 4.128-.984 1.057-2.386 1.648-4.046 1.648H8.033c-1.66 0-3.062-.59-4.046-1.648-.978-1.05-1.487-2.5-1.487-4.128V8.026c0-1.628.511-3.078 1.49-4.129M5.089 4.92C4.41 5.647 4 6.71 4 8.026v7.948c0 1.317.409 2.38 1.085 3.106.67.72 1.66 1.17 2.948 1.17h8.434c1.29 0 2.278-.45 2.948-1.17.676-.726 1.085-1.789 1.085-3.106V8.026c0-1.317-.409-2.38-1.084-3.106-.67-.72-1.66-1.17-2.948-1.17H8.033c-1.284 0-2.273.45-2.945 1.17"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M10.25 14.934a.894.894 0 1 0 0 1.788.894.894 0 0 0 0-1.788m-2.395.893a2.394 2.394 0 1 1 4.788.001 2.394 2.394 0 0 1-4.788-.001M10.25 7.816a.894.894 0 1 0-.001 1.788.894.894 0 0 0 0-1.788m-2.395.894a2.394 2.394 0 1 1 4.788 0 2.394 2.394 0 0 1-4.788 0M14.993 12.33a.894.894 0 1 0 .133-.189.8.8 0 0 1-.133.19m-1.163-.966a2.394 2.394 0 1 1-.006.008z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M6.462 6.096a.75.75 0 0 1 1.046-.175l1.8 1.284a.75.75 0 0 1-.871 1.221l-1.8-1.284a.75.75 0 0 1-.175-1.046M10.25 9.605a.75.75 0 0 1 .75.75v3.828a.75.75 0 0 1-1.5 0v-3.828a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M10.933 9.29a.75.75 0 0 1 1.046-.174l2.898 2.07a.75.75 0 0 1-.873 1.221l-2.897-2.07a.75.75 0 0 1-.174-1.046"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystGitGithubOutline;
