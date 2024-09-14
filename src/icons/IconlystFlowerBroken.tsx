import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystFlowerBroken = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M8.33 10.322c-.746-.312-1.86-.634-2.945-.634a3 3 0 0 0-.414.033c-2.45.39-2.45 4.168 0 4.559q.206.033.414.033c1.095 0 2.204-.322 2.95-.634M16.426 13.676c.746.312 1.859.637 2.954.637q.207 0 .414-.033c2.45-.391 2.45-4.168 0-4.56a3 3 0 0 0-.414-.032c-1.085 0-2.203.325-2.95.637M14.061 7.953c.312-.746.634-1.855.634-2.95a3 3 0 0 0-.033-.414c-.39-2.452-4.168-2.452-4.559 0a2.6 2.6 0 0 0-.033.414c0 1.085.325 2.203.637 2.948M10.707 16.049c-.312.746-.637 1.864-.637 2.948q0 .208.033.415c.391 2.45 4.168 2.45 4.56 0q.031-.207.032-.415c0-1.094-.322-2.203-.634-2.95"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M10.708 16.049c-.306.748-.863 1.76-1.637 2.535a3 3 0 0 1-.317.269c-1.58 1.146-3.57-.262-3.639-1.892M8.33 10.322c-.748-.307-1.764-.867-2.53-1.634a2.6 2.6 0 0 1-.27-.317c-1.084-1.496.12-3.359 1.634-3.611M14.062 7.953c.306-.748.867-1.77 1.633-2.536q.147-.146.317-.27c1.684-1.22 3.833.458 3.627 2.216M16.426 13.676c.748.306 1.765.862 2.54 1.637q.146.147.269.317c1.214 1.675-.44 3.81-2.187 3.63"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M16.702 12a4.318 4.318 0 1 0-8.638 0 4.319 4.319 0 0 0 8.638 0"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystFlowerBroken;
