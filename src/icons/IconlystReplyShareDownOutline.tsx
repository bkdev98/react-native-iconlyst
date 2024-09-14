import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystReplyShareDownOutline = ({
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
      d="m16.292 6.18-.105.743za.75.75 0 0 1 .204 1.426c-.991.449-1.63 1.058-2.03 1.786-.311.566-.497 1.237-.567 2.016h1.3c1.09 0 1.682 1.293.941 2.113l-3.552 3.93a1.264 1.264 0 0 1-1.902-.032L7.36 13.494c-.695-.821-.114-2.083.964-2.085h.973c.108-1.296.499-2.312 1.082-3.096.688-.926 1.598-1.464 2.473-1.773a7.7 7.7 0 0 1 2.353-.409 8 8 0 0 1 1.057.045l.02.003h.006zm-6.274 6.728-1.186.001 2.825 3.335 3.016-3.336h-1.556a.75.75 0 0 1-.75-.75c0-1.27.219-2.46.785-3.489a5.3 5.3 0 0 1 .563-.827q-.181.049-.363.113c-.668.235-1.3.623-1.768 1.253-.466.625-.816 1.552-.816 2.95a.75.75 0 0 1-.75.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystReplyShareDownOutline;
