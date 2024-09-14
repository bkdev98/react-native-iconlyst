import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDropboxCircleOutline = ({
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
      d="M12 21.75c-5.38 0-9.75-4.37-9.75-9.75S6.62 2.25 12 2.25s9.75 4.37 9.75 9.75-4.37 9.75-9.75 9.75m0-18c-4.55 0-8.25 3.7-8.25 8.25s3.7 8.25 8.25 8.25 8.25-3.7 8.25-8.25-3.7-8.25-8.25-8.25"
    />
    <Path
      fill={props.color}
      d="M9.16 15.152c-.33 0-.67-.09-.96-.28l-1.59-1.01a1.25 1.25 0 0 1-.59-1.07c0-.44.22-.84.59-1.07l7.26-4.62a1.8 1.8 0 0 1 1.92 0l1.59 1.01c.37.23.59.63.59 1.07s-.22.84-.59 1.07l-7.26 4.62c-.29.19-.63.28-.96.28m-1.44-2.36 1.28.82c.09.06.22.06.31 0l6.95-4.43-1.28-.82a.29.29 0 0 0-.31 0z"
    />
    <Path
      fill={props.color}
      d="M14.83 15.152c-.33 0-.67-.09-.96-.28l-7.26-4.62c-.37-.23-.59-.64-.59-1.07 0-.44.22-.84.59-1.07l1.59-1.01a1.8 1.8 0 0 1 1.92 0l7.26 4.62c.37.24.59.64.59 1.07 0 .44-.22.84-.59 1.07l-1.59 1.01c-.29.19-.63.28-.96.28m-7.11-5.97 6.95 4.42c.09.06.22.06.31 0l1.28-.82-6.95-4.43a.29.29 0 0 0-.31 0l-1.28.82z"
    />
    <Path
      fill={props.color}
      d="M12 18.13c-.27 0-.54-.06-.79-.19l-1.88-.95c-.59-.3-.96-.92-.96-1.58v-1.02c.02-.41.35-.74.76-.74s.75.35.74.76v1.02c-.01.09.04.18.12.22l1.88.95c.07.04.15.04.22 0l1.89-.96c.08-.04.13-.12.13-.22v-1.04c.02-.41.37-.72.77-.74.41 0 .75.35.74.76v1.04c-.02.65-.39 1.24-.97 1.53l-1.9.96c-.25.13-.52.19-.79.19z"
    />
  </Svg>
);
export default IconlystDropboxCircleOutline;
