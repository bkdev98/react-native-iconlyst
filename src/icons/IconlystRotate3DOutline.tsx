import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystRotate3DOutline = ({
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
      d="M9.416 15.148a2.22 2.22 0 0 1-1.579-.655.751.751 0 0 1 1.064-1.058.72.72 0 0 0 .515.213.73.73 0 0 0 0-1.46.75.75 0 0 1-.583-1.22l.5-.616H8.32a.75.75 0 0 1 0-1.5h2.583a.749.749 0 0 1 .583 1.22l-.81 1.006a2.229 2.229 0 0 1-1.257 4.07zM14.259 15.148h-.8a.75.75 0 0 1-.75-.75v-4.8a.75.75 0 0 1 .75-.75h.8a3.15 3.15 0 0 1 0 6.3m-.05-1.5h.05a1.65 1.65 0 1 0 0-3.3h-.05zM5.74 19.224a.7.7 0 0 1-.145-.015l-2.633-.525a.752.752 0 0 1-.485-1.156.75.75 0 0 1 .778-.315l1.9.38.376-1.885a.75.75 0 0 1 1.47.293l-.521 2.62a.75.75 0 0 1-.736.6zM17.868 9.064a.75.75 0 0 1-.73-.919l.599-2.6a.75.75 0 0 1 .333-.467.76.76 0 0 1 .567-.1l2.616.605a.75.75 0 1 1-.338 1.462l-1.886-.436-.433 1.871a.75.75 0 0 1-.729.584"
    />
    <Path
      fill={props.color}
      d="M5.768 19.061a.75.75 0 0 1-.524-.213A9.641 9.641 0 0 1 13.391 2.41a.75.75 0 1 1-.219 1.484 8.14 8.14 0 0 0-6.88 13.881.75.75 0 0 1-.524 1.287M12.036 21.695c-.57 0-1.14-.05-1.7-.151a.75.75 0 1 1 .264-1.476A8.14 8.14 0 0 0 17.9 6.4a.75.75 0 0 1 1.079-1.043 9.64 9.64 0 0 1-6.94 16.337z"
    />
  </Svg>
);
export default IconlystRotate3DOutline;
