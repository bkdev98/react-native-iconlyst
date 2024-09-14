import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystAiBrainChipLight = ({
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
      d="M7.664 14.694c.096 2.175 2.722 2.63 3.997 1.393.602 1.168 1.847 1.163 2.395 1.014l1.196 2.83c.012.03.04.049.07.049h1.688a.08.08 0 0 0 .077-.082v-1.723c5.118-.304 4.461-3.96 3.206-4.601 2.279-2.17.772-4.129 0-4.906-.284-.801-.908-2.007-2.279-2.412M7.663 14.696c-.82.584-2.41.682-3.534 0-1.69-1.027-2.178-3.31-.927-5.175l.197-.26M6.986 5.545c1.177-.693 3.63-2.207 6.76-1.173"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.601 5.666c2.353-3.51 6.748-.389 4.897 2.12a1 1 0 0 1-.05.058l-.724.715M5.276 11.382C1.39 10.392 4.02 3.709 8.68 6.064q.052.027.098.064l1.07.894M14.054 17.088l1.082-3.504-2.781-2.996V5.816"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M4.94 6.152 7.051 8.81l-1.76 2.575.373 3.738M15.157 13.59h5.122M15.158 13.568l5.088-4.915-7.869-.133"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m8.954 12.244 3.454-1.655-5.362-1.77 5.555-3.143m-3.647 6.568 2.676 3.8m-2.676-3.8-1.311 2.408M18.9 17.797l-3.743-4.207"
    />
  </Svg>
);
export default IconlystAiBrainChipLight;
