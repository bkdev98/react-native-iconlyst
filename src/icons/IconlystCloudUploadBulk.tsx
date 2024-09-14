import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCloudUploadBulk = ({
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
      d="M18.015 9.002a.21.21 0 0 1-.183-.18c-.294-2.108-2.009-4.74-5.33-4.74-3.572 0-5.041 2.91-5.326 4.743A.21.21 0 0 1 6.993 9c-2.359.29-3.956 2.097-3.956 4.583a4.64 4.64 0 0 0 2.74 4.222 5 5 0 0 0 1.843.374h2.023a.36.36 0 0 0 .36-.36c0-.213-.187-.378-.4-.388a2.46 2.46 0 0 1-1.64-.719 2.5 2.5 0 0 1 0-3.535l2.77-2.769a2.5 2.5 0 0 1 .382-.314c.061-.04.126-.068.19-.103.08-.043.156-.091.24-.126.08-.033.164-.052.246-.077.074-.022.145-.05.221-.065a2.5 2.5 0 0 1 .462-.047q.014-.002.027-.003.012 0 .022.003.236.001.467.047c.075.015.144.042.217.064.084.025.17.044.25.078.081.034.155.079.231.121.067.036.136.066.2.109q.184.125.342.279.02.015.04.031l2.77 2.771a2.5 2.5 0 0 1 0 3.536 2.46 2.46 0 0 1-1.64.718c-.213.01-.398.174-.398.388 0 .2.162.361.361.361h2.01c.348 0 1.051-.048 1.875-.378a4.64 4.64 0 0 0 2.715-4.218c0-2.483-1.593-4.29-3.948-4.582"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M15.271 15.697a.749.749 0 0 0 .53-1.28l-2.771-2.771a.75.75 0 0 0-.531-.22l-.011.002a.75.75 0 0 0-.52.219l-2.77 2.77a.749.749 0 1 0 1.061 1.06l1.491-1.49v5.183a.75.75 0 1 0 1.5 0v-5.183l1.491 1.49c.146.147.338.22.53.22"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystCloudUploadBulk;
