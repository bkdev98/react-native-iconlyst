import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMediumOldOutline = ({
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
      fillRule="evenodd"
      d="M5.253 7.328a.75.75 0 0 1 .75.75v7.82a.75.75 0 0 1-1.5 0v-7.82a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M14.764 5.882a2.75 2.75 0 0 1 2.634-1.96h2.812c.904 0 1.53.796 1.53 1.58 0 .48-.223.824-.49 1.073l-.785.727a1.25 1.25 0 0 0-.403.918v7.91c0 .271.088.535.25.751l1.246 1.66a.961.961 0 0 1-.77 1.538h-6.31a.977.977 0 0 1-.875-1.415l.89-1.78a1.25 1.25 0 0 0 .132-.558v-4.763l-2.253 7.51a1.41 1.41 0 0 1-2.637.174L5.247 9.275a1.5 1.5 0 0 0-.308-.446L2.703 6.593a1.546 1.546 0 0 1 1.093-2.639h3.52a2.75 2.75 0 0 1 2.512 1.631l3.003 6.74zm-2.594 8.645L8.458 6.195a1.25 1.25 0 0 0-1.142-.741h-3.52a.046.046 0 0 0-.033.078L6 7.768c.257.258.465.56.614.89l4.39 9.755zm3.955-7.964v9.763c0 .426-.099.848-.29 1.23l-.512 1.023h4.388l-.598-.798a2.75 2.75 0 0 1-.55-1.65V8.22c0-.767.32-1.5.883-2.02l.784-.727.003-.003a.13.13 0 0 0-.036-.049h-2.8a1.25 1.25 0 0 0-1.197.89zM5.25 15.148a.75.75 0 0 1 .61.314l2.21 3.092a.963.963 0 0 1-.783 1.523H3.213a.963.963 0 0 1-.783-1.523l2.21-3.092a.75.75 0 0 1 .61-.314m0 2.04-.993 1.39h1.987z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystMediumOldOutline;
