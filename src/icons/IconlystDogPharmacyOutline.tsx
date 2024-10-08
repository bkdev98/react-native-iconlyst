import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDogPharmacyOutline = ({
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
      d="M10.02 8.368c-.41 0-.75-.34-.75-.75s.34-.76.75-.76.75.33.75.75-.34.76-.75.76"
    />
    <Path
      fill={props.color}
      d="M11.31 21.629c-1.34 0-2.32-.25-2.69-.36a.74.74 0 0 1-.48-.45.77.77 0 0 1 .06-.66c1.21-1.99 1.54-4.43 1.27-6.05-.55.08-1.44.2-2.94.37-1.05.12-1.98-.16-2.73-.81-1.67-1.45-1.82-4.12-1.83-4.65 0-.31.17-.59.46-.71l3.79-1.61c.01-.72.23-1.61.82-2.35.46-.58 1.34-1.29 2.92-1.39l2.13-.17c3.24-.28 5.81 1.76 6.82 5.47.14.52.26 1.04.35 1.54.07.41-.2.8-.61.87-.41.08-.8-.2-.87-.61-.08-.45-.19-.92-.32-1.4-1.12-4.1-3.77-4.5-5.25-4.37l-2.14.17c-.84.06-1.46.34-1.86.83-.5.62-.53 1.44-.47 1.78a.76.76 0 0 1-.45.81L3.5 9.489c.11 1.13.52 2.4 1.27 3.05.43.37.94.52 1.57.45.73-.08 2.93-.33 3.33-.44a.75.75 0 0 1 1.06.43c.55 1.7.43 4.54-.76 7.05.44.07 1.01.12 1.66.1.41-.02.76.31.77.72s-.31.76-.72.77h-.36z"
    />
    <Path
      fill={props.color}
      d="M18.55 21.838h-1.98c-.72 0-1.31-.59-1.31-1.31v-.86h-.86c-.72 0-1.31-.59-1.31-1.31v-1.98c0-.72.59-1.31 1.31-1.31h.86v-.86c0-.72.59-1.31 1.31-1.31h1.98c.72 0 1.31.59 1.31 1.31v.86h.86c.72 0 1.31.59 1.31 1.31v1.98c0 .72-.59 1.31-1.31 1.31h-.86v.86c0 .72-.59 1.31-1.31 1.31m-1.79-1.5h1.61v-1.42c0-.41.34-.75.75-.75h1.42v-1.61h-1.42c-.41 0-.75-.34-.75-.75v-1.42h-1.61v1.42c0 .41-.34.75-.75.75h-1.42v1.61h1.42c.41 0 .75.34.75.75zM13.17 13.218a.75.75 0 0 1-.75-.72c-.06-1.51.15-2.95.29-3.67a.75.75 0 0 1 .88-.6c.41.08.68.47.6.88-.12.66-.32 1.97-.27 3.33.02.41-.3.76-.72.78z"
    />
  </Svg>
);
export default IconlystDogPharmacyOutline;
