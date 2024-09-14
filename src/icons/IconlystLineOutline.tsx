import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystLineOutline = ({
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
      d="M2.25 11.14c0-4.876 4.406-9.12 9.75-9.12s9.75 4.244 9.75 9.12c0 2.622-1.483 5.075-2.994 6.897-1.524 1.84-3.188 3.17-3.775 3.566-.174.117-.483.309-.808.36a.97.97 0 0 1-.78-.196c-.29-.241-.343-.575-.343-.785v-1.34q-.518.05-1.05.05c-5.273 0-9.75-3.613-9.75-8.552M12 3.52c-4.596 0-8.25 3.65-8.25 7.62 0 3.904 3.582 7.052 8.25 7.052q.86 0 1.667-.148a.75.75 0 0 1 .883.738v1.276a20.8 20.8 0 0 0 3.051-2.978c1.443-1.74 2.649-3.85 2.649-5.94 0-3.97-3.653-7.62-8.25-7.62"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M11.163 8.655a.75.75 0 0 1 .84.29l1.124 1.624V9.37a.75.75 0 0 1 1.5 0v3.6a.75.75 0 0 1-1.367.427l-1.124-1.624v1.197a.75.75 0 1 1-1.5 0v-3.6a.75.75 0 0 1 .527-.716m-4.767-.034a.75.75 0 0 1 .75.75v2.85h.42a.75.75 0 0 1 0 1.5h-1.17a.75.75 0 0 1-.75-.75v-3.6a.75.75 0 0 1 .75-.75m3.033 0a.75.75 0 0 1 .75.75v3.6a.75.75 0 1 1-1.5 0v-3.6a.75.75 0 0 1 .75-.75m5.655.75a.75.75 0 0 1 .75-.75h1.77a.75.75 0 0 1 0 1.5h-1.02v.3h.592a.75.75 0 0 1 0 1.5h-.592v.3h1.02a.75.75 0 0 1 0 1.5h-1.77a.75.75 0 0 1-.75-.75z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystLineOutline;
