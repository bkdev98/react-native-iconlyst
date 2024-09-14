import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMoneyPaperStarOutline = ({
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
      d="M11.762 19.529H6.439a3.85 3.85 0 0 1-3.94-4.1v-7.4a3.847 3.847 0 0 1 3.938-4.1h11.625A3.85 3.85 0 0 1 22 8.029v2a.75.75 0 1 1-1.5 0v-2a2.34 2.34 0 0 0-2.438-2.6H6.437A2.34 2.34 0 0 0 4 8.029v7.4a2.342 2.342 0 0 0 2.439 2.6h5.323a.75.75 0 1 1 0 1.5"
    />
    <Path
      fill={props.color}
      d="M7.868 8.93h-1.4a.75.75 0 0 1 0-1.5h1.4a.75.75 0 1 1 0 1.5M12.249 14.77a3.036 3.036 0 1 1 .004-6.073 3.036 3.036 0 0 1-.004 6.072m0-4.576a1.538 1.538 0 1 0 .59.115 1.5 1.5 0 0 0-.59-.118zM16.748 20.197a1.02 1.02 0 0 1-.999-1.195l.224-1.369-.945-.964a1.02 1.02 0 0 1-.242-1.044 1.01 1.01 0 0 1 .807-.691l1.283-.2.578-1.22a1.006 1.006 0 0 1 1.828 0l.574 1.215 1.282.2a1.01 1.01 0 0 1 .81.692 1.02 1.02 0 0 1-.249 1.05l-.938.959.223 1.37a1.02 1.02 0 0 1-.947 1.192 1 1 0 0 1-.54-.13l-1.13-.62-1.136.625a1 1 0 0 1-.483.13m-.237-1.44h-.008zm3.706 0 .01.005zm-3.475-2.476.57.58a.75.75 0 0 1 .2.646l-.127.771.617-.338a.75.75 0 0 1 .723 0l.616.338-.126-.77a.75.75 0 0 1 .2-.646l.568-.58-.754-.115a.75.75 0 0 1-.565-.42l-.306-.646-.3.645a.75.75 0 0 1-.565.421zm3.891-.656-.006.007zm-4.538 0 .007.007zm1.83-1.46v.006zm.887-.005v.006z"
    />
  </Svg>
);
export default IconlystMoneyPaperStarOutline;
