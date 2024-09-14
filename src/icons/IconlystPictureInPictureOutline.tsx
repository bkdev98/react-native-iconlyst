import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPictureInPictureOutline = ({
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
      d="M3.824 3.897C4.81 2.841 6.211 2.25 7.866 2.25h8.435c1.66 0 3.062.59 4.046 1.648.978 1.05 1.487 2.5 1.487 4.128v7.948c0 1.627-.509 3.078-1.487 4.128-.985 1.057-2.387 1.648-4.047 1.648H7.866c-1.66 0-3.062-.59-4.045-1.648-.979-1.05-1.487-2.501-1.487-4.128V8.026c0-1.628.511-3.078 1.49-4.129M4.921 4.92c-.677.727-1.087 1.79-1.087 3.106v7.948c0 1.317.409 2.38 1.084 3.106.67.72 1.66 1.17 2.948 1.17H16.3c1.29 0 2.278-.45 2.949-1.17.676-.726 1.085-1.789 1.085-3.106V8.026c0-1.317-.409-2.38-1.085-3.106-.67-.72-1.66-1.17-2.948-1.17H7.866c-1.284 0-2.273.45-2.945 1.17"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M10.24 11.26c.48-.517 1.155-.791 1.916-.791h3.304c.763 0 1.438.274 1.92.79.475.51.704 1.197.704 1.928v2.14c0 .732-.23 1.419-.705 1.93-.48.515-1.156.79-1.919.79h-3.304c-.763 0-1.438-.274-1.918-.791-.475-.51-.705-1.197-.705-1.928v-2.14c0-.733.231-1.42.707-1.929m1.097 1.022c-.174.186-.304.484-.304.905v2.14c0 .423.13.721.303.907.167.18.428.313.82.313h3.304c.393 0 .654-.133.822-.313.173-.186.302-.484.302-.906v-2.14c0-.422-.13-.72-.302-.906-.168-.18-.43-.313-.822-.313h-3.304c-.39 0-.651.133-.82.313"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystPictureInPictureOutline;
