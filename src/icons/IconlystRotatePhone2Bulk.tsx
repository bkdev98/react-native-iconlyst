import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystRotatePhone2Bulk = ({
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
      d="M17.743 15.436a.18.18 0 0 0 .002-.326 7 7 0 0 0-.495-.225 2.49 2.49 0 0 1-1.36-3.26 2.484 2.484 0 0 1 2.76-1.493c.13.024.26-.072.26-.206V6.575a4.1 4.1 0 0 0-4.1-4.1h-5.5a4.1 4.1 0 0 0-4.1 4.1V9.92c0 .133.127.228.258.205 1.152-.201 2.325.414 2.762 1.54.5 1.29-.14 2.74-1.42 3.24q-.279.111-.493.207a.18.18 0 0 0-.003.331c.386.181.886.372 1.507.54a.21.21 0 0 0 .236-.103c.1-.171.224-.326.373-.475.98-.97 2.56-.97 3.54 0l1.59 1.59a.213.213 0 0 0 .306-.012 2.47 2.47 0 0 1 1.364-.758c1.122-.225 1.954-.518 2.513-.79"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12.692 18.687a.8.8 0 0 0-.162-.244l-1.8-1.799a.749.749 0 1 0-1.06 1.06l.43.431c-3.928-.366-6.35-1.818-6.35-2.86 0-.683.86-1.394 2.422-2.002a.75.75 0 1 0-.544-1.398c-2.241.872-3.378 2.016-3.378 3.4 0 2.262 3.34 4.025 8.009 4.38l-.59.59a.75.75 0 0 0 1.06 1.06l1.8-1.8a.75.75 0 0 0 .163-.818M18.485 11.881a.75.75 0 1 0-.57 1.387c1.506.62 2.335 1.333 2.335 2.007 0 .872-1.612 2.067-4.693 2.663a.749.749 0 0 0 .142 1.486.7.7 0 0 0 .143-.014c3.7-.716 5.908-2.26 5.908-4.135 0-1.36-1.099-2.502-3.265-3.394M13.46 7.425h-2.8a.749.749 0 1 1 0-1.5h2.8a.749.749 0 1 1 0 1.5"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystRotatePhone2Bulk;
