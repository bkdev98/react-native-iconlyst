import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMoneyPaperStarBold = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 24 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M11.093 9.679a1.54 1.54 0 0 0 0 3.08 1.54 1.54 0 0 0 0-3.08"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M11.093 14.259a3.04 3.04 0 0 1-3.038-3.04 3.04 3.04 0 0 1 3.038-3.04 3.04 3.04 0 0 1 3.038 3.04 3.04 3.04 0 0 1-3.038 3.04M6.711 8.418H5.308a.75.75 0 0 1 0-1.5h1.403a.75.75 0 0 1 0 1.5m6.808 6.839a2.29 2.29 0 0 1 1.851-1.537l.67-.105a.3.3 0 0 0 .225-.167l.33-.694a2.29 2.29 0 0 1 2.074-1.323c.435 0 .847.13 1.199.358.253.164.726-.003.726-.305V7.52c0-2.303-1.482-3.851-3.689-3.851H5.281c-2.206 0-3.687 1.548-3.687 3.851v7.399c0 2.303 1.482 3.851 3.688 3.851h9.112a.3.3 0 0 0 .296-.252l.009-.056a.3.3 0 0 0-.082-.258l-.557-.567a2.32 2.32 0 0 1-.54-2.379"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M19.83 17.115a.75.75 0 0 0-.205.647l.125.77-.616-.338a.75.75 0 0 0-.721 0l-.619.34.127-.772a.75.75 0 0 0-.206-.647l-.567-.575.756-.117a.75.75 0 0 0 .564-.42l.305-.645.305.645a.75.75 0 0 0 .564.42l.753.117zm2.519-1.24a1 1 0 0 0-.802-.674l-1.282-.199-.575-1.209a1.01 1.01 0 0 0-.918-.599c-.391 0-.752.234-.912.587l-.578 1.221-1.27.197c-.378.052-.69.311-.816.676-.127.373-.037.78.24 1.063l.942.958-.223 1.371c-.065.39.101.786.423 1.01.175.12.375.181.575.181a1 1 0 0 0 .484-.128l1.136-.623 1.124.615a.99.99 0 0 0 1.072-.046c.32-.223.485-.62.421-1.006l-.224-1.374.945-.96a1.03 1.03 0 0 0 .238-1.06"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystMoneyPaperStarBold;