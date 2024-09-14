import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPenPlusOutline = ({
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
      d="M7.845 20.535a1.58 1.58 0 0 1-1.515-1.99c.542-2.41.766-4.881.666-7.35a1.575 1.575 0 0 1 1.306-1.593l6.034-1a.75.75 0 1 1 .243 1.48l-6.022.995a.08.08 0 0 0-.061.079 29.7 29.7 0 0 1-.72 7.785l.29.812-.2-.723a30 30 0 0 1 7.795-.716c.036 0 .059-.039.066-.076l.994-6.013a.751.751 0 0 1 1.482.245l-1 6.023a1.62 1.62 0 0 1-1.58 1.321c-2.473-.1-4.948.122-7.363.663a1.6 1.6 0 0 1-.415.058M4.987 9.146a.75.75 0 0 1-.75-.75v-1.1H3.145a.75.75 0 1 1 0-1.5h1.092v-1.09a.75.75 0 1 1 1.5 0v1.09H6.83a.75.75 0 1 1 0 1.5H5.737v1.1a.75.75 0 0 1-.75.75"
    />
    <Path
      fill={props.color}
      d="M18.734 13.76a2.24 2.24 0 0 1-1.583-.654l-3.455-3.453a2.24 2.24 0 0 1-.375-2.659l.578-1.044a2.02 2.02 0 0 1 3.191-.45l4.214 4.213a2.018 2.018 0 0 1-.451 3.192l-1.045.577a2.2 2.2 0 0 1-1.074.277m-4.1-6.04a.74.74 0 0 0 .124.873l3.454 3.453a.73.73 0 0 0 .87.123l1.047-.578a.5.5 0 0 0 .261-.379.51.51 0 0 0-.146-.44L16.032 6.56a.52.52 0 0 0-.82.116zM7.26 20.297a.75.75 0 0 1-.53-1.28l4.088-4.09a.75.75 0 0 1 1.06 1.06l-4.088 4.09a.75.75 0 0 1-.53.22"
    />
    <Path
      fill={props.color}
      d="M12.268 16.586a2.049 2.049 0 1 1 0-4.098 2.049 2.049 0 0 1 0 4.098m0-2.598a.549.549 0 1 0 .003 1.098.549.549 0 0 0-.004-1.098"
    />
  </Svg>
);
export default IconlystPenPlusOutline;
