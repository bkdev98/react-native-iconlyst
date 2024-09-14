import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDoubleHeart2Bulk = ({
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
      fillRule="evenodd"
      d="M18.82 4.518c-.79-.24-1.61-.29-2.36-.15-.69.11-1.3.49-1.88.91-.52-.38-1.17-.79-1.88-.91a5.3 5.3 0 0 0-2.37.15c-1.507.49-2.612 1.647-3.118 3.138-.063.186.082.376.273.422.229.054.457.146.665.24a.32.32 0 0 0 .26 0 4 4 0 0 1 .89-.28 5.36 5.36 0 0 1 2.46.17c2.79.91 4.21 3.95 3.25 6.94v.01c-.3.925-.808 1.74-1.396 2.455a.306.306 0 0 0 .086.464c.374.2.65.341.65.341a.47.47 0 0 0 .44.01c.23-.11 5.77-2.73 7.15-6.96.85-2.64-.08-5.97-3.12-6.95"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M13.586 14.689c.614-1.918-.07-4.331-2.281-5.049a3.7 3.7 0 0 0-1.735-.124c-.47.086-.893.333-1.288.612-.396-.28-.822-.527-1.296-.604a3.7 3.7 0 0 0-1.727.117c-2.212.719-2.898 3.131-2.284 5.044.934 3.005 4.926 4.898 5.095 4.977a.51.51 0 0 0 .424 0c.166-.078 4.1-1.943 5.09-4.97z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystDoubleHeart2Bulk;
