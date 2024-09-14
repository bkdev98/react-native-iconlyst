import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystReplyShareLeftOutline = ({
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
      d="M4.835 4.92C4.16 5.646 3.75 6.709 3.75 8.026v7.947c0 1.317.409 2.38 1.085 3.106.67.72 1.66 1.17 2.95 1.17h8.433c1.288 0 2.277-.45 2.947-1.17.676-.726 1.085-1.789 1.085-3.106V8.026c0-1.316-.41-2.38-1.088-3.106-.672-.72-1.66-1.17-2.944-1.17H7.783c-1.288 0-2.277.45-2.948 1.17M3.737 3.898C4.721 2.84 6.124 2.25 7.783 2.25h8.435c1.655 0 3.057.591 4.041 1.647.98 1.05 1.491 2.5 1.491 4.13v7.946c0 1.627-.509 3.077-1.487 4.128-.984 1.057-2.386 1.648-4.045 1.648H7.784c-1.66 0-3.062-.59-4.046-1.648-.98-1.05-1.488-2.5-1.488-4.128V8.026c0-1.627.509-3.078 1.487-4.128"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="m17.816 16.29-.743-.105za.75.75 0 0 1-1.426.204c-.449-.99-1.057-1.629-1.786-2.03-.566-.311-1.237-.497-2.016-.567v1.3c0 1.09-1.293 1.682-2.113.942l-3.93-3.552a1.264 1.264 0 0 1 .033-1.903l3.924-3.324c.821-.696 2.083-.115 2.085.964v.972c1.296.108 2.312.5 3.096 1.082.926.688 1.464 1.598 1.773 2.473.307.87.395 1.726.409 2.353a8 8 0 0 1-.045 1.057l-.003.02v.006zm-6.728-6.273V8.83l-3.336 2.825 3.336 3.016v-1.556a.75.75 0 0 1 .75-.75c1.27 0 2.46.22 3.489.785q.44.242.827.563a5 5 0 0 0-.112-.363c-.236-.668-.624-1.3-1.254-1.768-.625-.466-1.552-.816-2.95-.816a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystReplyShareLeftOutline;
