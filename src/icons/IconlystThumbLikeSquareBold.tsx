import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystThumbLikeSquareBold = ({
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
      d="M9.149 11.19c0-.212 0-.43-.015-.492-.024.023-.243.023-.455.023h-.081c-.212 0-.43 0-.492.015.023.023.023.242.023.454v3.861c0 .212 0 .431.015.493.022-.024.242-.024.454-.024.294 0 .514 0 .576-.015-.025-.023-.025-.242-.025-.454z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="m17.495 13.94-.265.977c-.163.604-.26.964-.503 1.285a2.1 2.1 0 0 1-.867.665c-.374.15-.728.15-1.371.15H12.18c-.237 0-.356-.004-.472-.02a2 2 0 0 1-.375-.088 3 3 0 0 1-.421-.19l-.595-.302c-.14.182-.306.342-.51.444-.319.159-.625.159-1.129.159-.586 0-.89 0-1.209-.158a1.53 1.53 0 0 1-.682-.681c-.16-.32-.16-.625-.16-1.13V11.19c0-.505 0-.81.16-1.13a1.5 1.5 0 0 1 .681-.68c.317-.16.623-.16 1.13-.16h.08c.488 0 .812 0 1.131.162.103.051.187.126.274.197.31-.382.783-1.099 1.367-2.242.104-.202.184-.358.338-.505.132-.128.313-.24.495-.3.201-.067.373-.064.55-.065.165.001.327.014.447.038.49.101.901.399 1.159.838.36.617.412 1.486.158 2.589 1.053 0 1.658.018 2.172.327.498.299.86.773 1.02 1.331.174.608.008 1.227-.296 2.35m2.474-9.987c-.946-.95-2.242-1.451-3.747-1.451H7.784c-3.158 0-5.279 2.221-5.279 5.527v7.942c0 3.306 2.121 5.527 5.28 5.527h8.43c3.157 0 5.28-2.221 5.28-5.527v-7.94c.005-1.638-.538-3.086-1.526-4.078"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M15.998 11.545c-.187-.112-.773-.112-1.584-.112h-.572c-.136 0-.322 0-.522-.115a.96.96 0 0 1-.405-.543c-.058-.222.003-.417.044-.547.47-1.463.26-1.998.184-2.128-.042-.074-.088-.11-.162-.124a1 1 0 0 0-.168-.008l-.024.052c-.989 1.929-1.668 2.748-2.14 3.098v3.785l.926.47c.125.064.18.095.24.116a1 1 0 0 0 .095.022c.072.009.137.007.271.007h2.308c.41 0 .705 0 .807-.041a.56.56 0 0 0 .238-.184c.064-.086.141-.37.247-.761l.261-.97c.213-.79.365-1.351.305-1.56a.8.8 0 0 0-.35-.457"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystThumbLikeSquareBold;
