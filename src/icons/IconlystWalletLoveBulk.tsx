import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystWalletLoveBulk = ({
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
      d="M14.824 11.628c0-1.82 1.48-3.29 3.29-3.29h3.998a.29.29 0 0 0 .292-.302c-.176-2.84-2.541-5.098-5.42-5.098h-8.13c-3 0-5.44 2.44-5.44 5.44v3.33c0 .233.256.379.47.286q.165-.072.34-.127c.86-.28 1.78-.27 2.61.01a4.2 4.2 0 0 1 2.62-.01c2.26.73 3.42 3.18 2.66 5.58-.33.96-.84 1.78-1.54 2.49l-.072.069c-.204.192-.07.552.21.552h6.272c3.02 0 5.276-2.45 5.422-5.35a.29.29 0 0 0-.292-.3h-4a3.29 3.29 0 0 1-3.29-3.28"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M18.954 11.57a.749.749 0 1 1-1.5 0c0-.42.33-.75.75-.75.41 0 .75.33.75.75m-2.63.06c0 .98.8 1.78 1.79 1.78h4a.3.3 0 0 0 .3-.3v-2.97a.3.3 0 0 0-.3-.3h-4c-.99 0-1.79.8-1.79 1.79M9.11 16.793c-.167.488-.444.93-.808 1.298-.5.48-1.045.92-1.663 1.332a11.6 11.6 0 0 1-1.65-1.336 3.4 3.4 0 0 1-.811-1.279c-.237-.744-.037-1.682.804-1.953a1.3 1.3 0 0 1 .402-.064c.287 0 .57.093.809.271.265.2.632.2.899 0 .348-.262.799-.34 1.206-.207.842.271 1.044 1.21.812 1.938m-.351-3.366a2.83 2.83 0 0 0-2.118.158 2.82 2.82 0 0 0-2.12-.158c-1.524.492-2.302 2.178-1.765 3.856a4.9 4.9 0 0 0 1.182 1.874A13 13 0 0 0 6.16 20.9l.116.066a.746.746 0 0 0 .746-.008l.099-.058a13.5 13.5 0 0 0 2.233-1.74 4.94 4.94 0 0 0 1.179-1.895c.529-1.659-.251-3.345-1.775-3.837"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystWalletLoveBulk;
