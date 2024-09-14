import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSwipeRight2Outline = ({
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
      d="M14.926 3.806a.91.91 0 0 0-1.17.545l-3.26 8.96a.75.75 0 0 1-1.431-.067l-.527-2.029a1.07 1.07 0 0 0-1.052-.798c-.565.01-.985.443-.986.957-.003 1.701.252 3.686.853 5.45.387 1.138 1.769 2.226 3.563 2.874 1.783.646 3.636.732 4.733.22.91-.424 1.85-1.278 2.564-2.368.711-1.087 1.152-2.341 1.145-3.523-.006-.998-.579-1.738-1.551-2.398-.735-.498-1.582-.878-2.427-1.257-.31-.139-.622-.278-.926-.423a.75.75 0 0 1-.387-.923l1.41-4.064a.91.91 0 0 0-.55-1.156m-2.579.032a2.412 2.412 0 0 1 4.547 1.615l-1.186 3.42.181.082c.875.392 1.906.854 2.76 1.433 1.162.788 2.2 1.921 2.21 3.63.008 1.544-.56 3.082-1.391 4.354-.83 1.268-1.969 2.339-3.185 2.906-1.616.754-3.927.537-5.878-.169-1.94-.702-3.863-2.013-4.472-3.801-.664-1.949-.936-4.103-.933-5.937.002-1.382 1.13-2.431 2.46-2.454a2.57 2.57 0 0 1 2.44 1.644z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M7.585 2.917a.75.75 0 0 1 1.022-.285l1.858 1.048a.75.75 0 0 1 .284 1.022L9.702 6.56a.75.75 0 1 1-1.307-.737l.68-1.205-1.205-.68a.75.75 0 0 1-.285-1.021"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M10.836 4.22a.75.75 0 0 1-.61.867C7.834 5.503 6 6.304 5.038 7.927a.75.75 0 0 1-1.29-.766c1.307-2.204 3.707-3.115 6.22-3.552a.75.75 0 0 1 .868.61"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystSwipeRight2Outline;
