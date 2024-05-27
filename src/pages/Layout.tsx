import { NavLink, Outlet } from 'react-router-dom';
import styled from '@emotion/styled';

const Nav = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 1.325rem;
  width: 8rem;
  height: 3rem;
  text-decoration: none;
  transition: color 0.25s ease-in-out 0s;
  font-weight: 600;
  margin: auto;
  padding-top: 20px;
  a {
    color: #777;
  }
  .active {
    color: rgb(50, 148, 248);
  }
`;

const Profile = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 20px;
  border-bottom: 1px solid #eee;
`;

const ProfilePicture = styled.img`
  display: block;
  width: 8rem;
  height: 8rem;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 10px;
`;

const Name = styled.h2`
  font-size: 1.5rem;
  line-height: 1.5;
  font-weight: bold;
  color: #222;
`;

const Description = styled.p`
  white-space: pre-wrap;
  font-size: 1.125rem;
  line-height: 1.5;
  margin-top: 0.25rem;
  color: #222;
  letter-spacing: -0.004em;
`;

const Layout = () => {
  return (
    <div>
      <Profile>
        <div>
          <ProfilePicture
            src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBUWFRgSFRUYEhIYEhUSGBgSGBgSGRISGBgZGRgYGBgcIS4lHB4rIRgYJjgmKy8xNTU1GiQ7QDs0Py40NTEBDAwMEA8QHhISGjQrISE0MTQ0NDQxNDQ0NDQ0MTQ0NDQxNDQ0NDQ0NDQ0NDQ0NDQ0NDE0MTQ0NDQ0MTQ0NDQ0NP/AABEIALcBEwMBIgACEQEDEQH/xAAbAAABBQEBAAAAAAAAAAAAAAAFAAIDBAYBB//EAD0QAAEDAgMFBgQEBQQCAwAAAAEAAhEDIQQSMQUiQVFxMmGBkaHwBhNSsULB0eEUIzNi8XKCkqIW0gcVQ//EABoBAAIDAQEAAAAAAAAAAAAAAAABAgQFAwb/xAAlEQACAgEEAgICAwAAAAAAAAAAAQIRAxIhMTIiQQRRE2EUcYH/2gAMAwEAAhEDEQA/AN+GqRoUbXhSB4UCZ2FWxAVgvCrYhwUWNA2pqpG8FFUN1Kw6LKyvyZfh1RR242WhZvabNzwWl2zoFndq/wBM9E8b8kSmvBmcanJgKdK0jOOpELkpSgBsLhC7KRcgCNzUxTaqN7CEAPAsq7xdWAbKSjTDkEiiV1XcTgXNEwqJKCIW2Ad89EfxJuOiyeAxWR0q/X2rK5ZNyzhg3uFTVAXTiQs3VxbnHWyu4Z4OpXKmi0scatsLNxErj3KJmUBQ4jFAcUHKrdRE8qAm6gGKBXS9KhyhJbUTOcnlllTdUuiLbtTm9iMYtPckwrEXpjRDcKEUp8FXkdkarBHcHQKYPuoMH2B0Uo1XNPyRB+wPja5zu6pJmK7buqS2LM6jQNYE8MC6E4KQDDTVSuxXiFVxDVFjQJqWKlbwUNXVTN4LIzdmaMOqK21Rujos9tcfyz0Wh2loOiAbY/pnojG/JDn0ZlW+5UhZxGnEcv2XKR4THXQ9VoNj7Azt+Y8ljDMNZdzuGpBAab6zK1G0uTOUW+DPQkQtqz4cw83zxeQXjh0aCuu+GaE2L4v+MSORu3RQ1oloZhoSIWuf8K0zBbWcAeJYHyOoIVZ/wvM5a7ePbY5kxwsTdGuIaJGdw4ur1SmIVh/wxiBdmSpeN14bf/flUdTZOJaIdReTYbg+Z1uyfZUlKL9hpa9Cp7NDmym4bBZXxojeBoPDIcx4txa4fkq9Ub4hF7jrYnq7PzNjuQp3w53lahhsOidKdipGSHw13uXD8Mn6nLYBOCKJa5L2ZBnw0fqPopW/Dz+Dj5LWtUrUaUH5ZL2ZD/6Cp9foo3fDLzq/0W3aVI09yNCBZpRdowf/AIy8fi9Ej8P1Bx9Fv7clwtHJL8aJfypnnNTYdaZt6qw2mWjKdVu3sbBssrtRu/ZcskUkdIZnN7lfDBEGHRU6IVxnBVJosI1GEduDop2m6rYYbg6Kw0LhF+SE+GBcV23dUl3EDePVJbNmdRpAuhNaU4LoROlVsQrBVbEKLGgRW1UjdAoK7t5SMfYLIzdmaMOqI9oaLP7Y/pn/AEo9jjZANs/0z0SxPyRKfVmXYvR9hNihTDp/pgnpAIvwsV5zRBJAGpIHmvU8HRAY1hJhobp/YNT5cZWjLlIoQWzZYczKJFz37s9Y46Jji0AkgcpJMHncnmq+PxzQ0cXGCcpMZpmLeXmgmJxLnCXkwSTHIDu5Kag2Gqi/X2jRaTq6B/8AmCB0nidFba1j2jIdWzDYJjv5LNh8jMRDRAHAXAKVN5bvdgRHMFv9w8E3BUCkzQ1MPbiRMzqR3x049y42QAA6SRuh0SYOslD8BtNrYpvIa+03Jty1t0RNldhALQJB1GsdHe9VzlD7JqTJsMHgbxDXG+64meXgpKwYWhtZoeHOAEHea6NWuSZVkgAgCSDw8Ao8Q3eaLDK3NYZtTFz0nzXKSUVa5JrydMo4ug1jsrSS2ARMTB6KEInXZSc6Mxa4NAjdPZEaDhZUXgTaY71ZSdKzi2r2GgJ4C4AnBMiPaFK0KIKRpQJkrQpWtUDSpmuUiDO5UiF2VxxQBG/RZfaXbWmebLM7R7a4ZuDvg7EVNWWHRV2KZpVSReiavCdgdArBKq4DsDoppuq0e6FLhgyszePVJWKjbnqktqmZtoLAJwXAV1SEIqtiSrJVWuk+BoCYk7ycw6JmJ1SadFkZuzNLH1Q7E6IDtzsHoj1c2CA7d7B6KOLuiU+jBHw7hW1KzASQG/zNMwOUgwT+EHmtltfEOY3KDFrxxWZ+Ch/NcW3/AJZGo4uaRbwRzbZOc94gcitWKuTM57IEsxZlzC0tLQ2Tq0B2hlX2UnPe1oEwyTB4EX+6zu1dmvrtbkf8t4OU5jkDmgEAyOIB9Atv8LYJzW53aNDmSZ3rgiJ16rqQKG2cL8trKcXLcx/1aeKDUKgeZJgDlxNohGfiyq5zxIyta0kuNpmNOawtXbDg1zwyGB5EAEuNpkk6SixpBXE083ZJDuZPNGdkbQeyA8fOIENy6+vHRA8I59TJUjLSLJAqDMcx+n+3v9i1ReWuGhvYgRx0UX5IfDNtg3EkES0Ro6XGe+dApaN6rgeJbHEw25jug6KpsrEZxcGGmSXGJ1uOf7q3g3y9wBI3yRFjAaAdevoqs/SLEfbKbKgAOURmJJPEyZv74pganwBxv0hSspg8R4/ZWqZXsghdCsHDnhfpdV8VTez8BPQIoVjgnhUMLjA4wbFXpQA8KRpUIKe0pkGTSuOKaCuEoAbUNlmsf21o6pss5ju0uGXg74OSNhUzVXYVO1VJF1GpwDtwdFIXXVfCHcHRS5rqon5r+xtbMnptsEldw9MZR0SW7Zl0NCcE1q6mAiquIVolVMQkxoB4k3TqZ0TcVqmNOiyc3Zmlj6onxBss78RH+W6PpP2Wgq6LPfEJ/lu/0n7Lni7onPqyt/8AGpOWq531ME9waTHqtbtfDzD2gzEdO9BPgHDuGFaTaaj3QbWmBpr2dVra4aGEOdwsdbxr3laidNsznwkUPhzZTXzUeMwBEAwbjmFcxu3qbAS+abRUNMSD2mmBpoE/ZOPa1pYd0jhmnxVeuKVSpLwHCxj8JcNDfiu2rbYjGKt2Q7QwoxNMPBH1NiDNuayuLw7QQ1zGOMC7mtJkTw52XoLwAIEBvCDlt0hA9r7NDgXNOvDW/h+idkTKuqGefqmZIM5Rr49yt4/B1GCZMcwAY8FBgcI55AcZHamO9RlKkTitzUbEYWszEkWmHRPMqbZD3CqM0Fgl+6DcuBNpNxvDnoNIsnANpfSXENBOt7e+itbJc4hrd0wRlIjskAk21uT625VeZpFjiDYzbOFcz+Y2YOtrD9UJp4sOMaRx1H+V6Di6IewiJsvPdr0DSdLRu8bWB+3gFeaKaZepVgNDYecq4zEkiNepWdpYgO0mfcqxSrnv8UgDTGMcZLR4BdxOAm7D4IVQxhcT99JVmjinNkO0593OENJjTaHNYRqngq5Tw4ewFhBIHBUntIMHVKqE3YnuXQ5MlIuUNL1XYr2G1XWWfxvaRyq6yB4s7y5ZuCxg5IGhWKaiapmqpIuI0mFO4OisYWnneGzCrYY7g6BPFXLvAwQqkGlNX9kpJ6XRqKezzA3/AE/dJZH/AMmqC2f0b+iS3tUTJphoFdlRgp4QM6VVxCskqpiCkxoC4o3TGnRdxRumMOiyc3Zmli6osVNEG2tTlt+XHQDiSjTtEF22d31PTl5T5qGHuiWTqwtsB7fksDLi4hxg5sxzTfnPer+JYXW+/wCvmEE+FpOHZBuC+Z55iYPX80bqb1swBA5wHHv4xotBvmyklxRBicKw5jckhrjDodMGNfd1yg5j28JFjF4IVSrswS57Yzm7i2x0gAclAzAvBJmOlieScZjcQi+s5gs+3IofiNpnkXcoH58lAcC5xIc5zyOemit4bCAQdDyT1EdJFg8zjmfoeXZI5O5eCJUMM1hhtgb95m+qaxkHSGxPP0Cs0LwCDBvfWNUXYUV9ov7FPTeBP5fkiewRABklvAEXHXvQrGOl7gY3cv8AtMjvm90Z2a2AOcLliV5DpkdYzRsfZZ7bGFa8EEA6wSAYPjKMMfZDMa/VX2ykjBva5riyRb6WsHTQg+ilw9dwtMjy8uCZ8Q0odmDn6/isB0KpYZxnXl3T6FIkgnndm0I5k/om4zFAGIJPdzXaYnUpYjZ8mQZn0HVABLYe0o4ZY5yFosRQbUZnb2omAsLQD2TAc6PH1Wh+H9sOLsjhHK6kJnH2MJhciO1aIG+BY/dCS5RA5VdZBsT2kVquQqvqq+bgsYORrSpWqBqnYqki4jQ4bsDolVTcM7cHRMrusVSS8yfoHmgz2UkNdMnqfuktszK/ZvQugpgeE7MF0IDiqtdWMyrVyoskgJizdRs4J2MN0ynwWXn7M0cXVFp53Qgu23bk93ojL9EF22Nw9Fxxd0Tn0YC2dtSpRBawgtJkhwkTzHHktb8P4813ZHhvZJ/lzYf3SSAsMwLa/CFGHHTsTbv48/stdwi3bRm6muGXcYyDDdNIN/8ACqvxbx+0hG6mGlRu2fPBc/xL6OiyMCHa54tIvrrPd906ltlg1LZJ47v3HRX6myhyVZ+xxyUXjfpskpr6LdDGMcJmeJi8dIurFMgknNYWuf1ugDtiAXALTzFvVJlCqyzXkjk64PXmlUkO4sJB4OZw7RMcbjswEewogBZ3CYZ5cHExcE690x5LRUyAOSngi022RzSTSSLzX21VLE3TnPKqVX+CstlajN/ET8tiNeLd0+ICA4eqW2MFvDgR5Ix8Q1mHcdIm44gHjA1B8Vn6Qh1ufObd8XTBB2nW45Qe8K1Q2jlt66W/NB6b3C09PYCTmOcJac0a8fLvQBq6VYOEyAOJt6QFPSwjA4VBf3wKxbMeWHI4EQdSjmzcXO9MDqdITsVGyNNtRmXTkeR71ncbhnMcWuRHAYoc1d2hhhVZmb2gLd6GrAyVRyH1tVexDSCQdQqNXVVc3BYwcjVLTUMqRhVWRcQewx3B0Se6EzDO3Qp6TQXgHmqsFeRL9kpOotl+jg25RYackkdo5co6JL0iS+jz71fYCa1OyroATgAqxcGlqr1laIVXEJMaAuL1TafBdxeqbT0WVn7M0sXVFp+gQjbQ3D0Rd2iFbabuHouWHuic+rMmwLZfCuJAfE9oQQL5eWY8z/iAFkGNWk2WMkBpl0i+m8eU93j047SMpm+DF3KmYapmYDxi/VOc9SIjXtCieAnPdxUTzNlFkkNewEKs+iFZLD4JFijQ7K1NivUxZQBsKzSbKlFCbHPpSEOrTB92RYNQ/Ft1UiJhts1A95nh2he0cY4dR3c1QaG8i4HkUR2rS380zyOjh+3uyHvq5ROWdJIjzJQMnpO5y7uu2Ol001Wgy0uzTfgf3VcVJkj2QoTUvNwdSDx6HQpiCD3Z7ZS4dwhWcHVy2gj1jrGiGsq9YI4QJCsU3g6kz0g+BBQM1+BqS2QDyt+qO4avlABOvE3usls15iLtMWGsrQ4aocgzWIuCI9U0RYN2/RDXkjjeECqFaHbjgQD3cfVZt5VX5HBYwcsbKkBUZTgVWkW0HMN2B0UzXw4HvUODO4OiWIVSG2RP9nSW8WjUUniBfgksAdrVG7ubSyS9FqRhPHI14Kc0qTCYJz7mze9GcPhGMFhK4JFhsCFp5HyVeu08j5FasMHILuQcgm42JSPPMTSdPZd5FcZRdHZd5FegupN+kJfKb9IVSfxNTuyzD5WlVRhCx0dl3kUO2tSeWEBjiY4NJXpny28gmmk36Qox+EoyUr4HL5dpqjxSlgKsf03j/Y79ET2dTqN/AWnTM5rrczyA+69X+Qz6QnDDs+kK5RV1GP2NiGtlpLjzc8EAu7p/wEWeUa/hmfSFSxuF4tEdybQJgxzuaidWM2sPuu1XKq96g2SSLDKp6pznFV6ALj3K22mAkgOBTU3JllwlSEWw+VRxeh59/FSZ1TxDpBCbYqMrtVgzEgEE6goO1wuRun8+I93RnarXAyZPI8+6eBQPEHiR17768kxjahGrTB+mRbzv7KhZU3gIv7seCjdExzMD/Pv7LgaBYjTTWW3uD4wgCxUrZDrAmx00OncpGPzGXAgi0xwHM8VTYZsZLTB8PZRCgwEdOIt08dEAHMELNMZmxG6Y9lafCubkgmGgTINwe8LM7KaZgw5v9yOYhmVpe3dMAc7clJCaKm2amgFxHDQ+CCuKM4jCufT+Yy5aYcBy1lBXKr8jhFjByxEpNKicU4FVmi0g7g3bgUpGZ2VVsG7cVnBXqtHVVYK5/wCk5bRYDxuz993VJbt2xmuvGq6tvUZNBtqcFC0p+eNfLRMCaU0uUWeff7roPu6LAkSTM3u/6JZkAPSTM/TzXc3uQgBy6mSuygB6a9shcldlAATaWEiXBA6mq2OIIAJOgErK1yHu3BafNc2iUWWMGLSpnpUqOVscVFUBCOEB0lND1F8xcFQJWMnchuJqgcYXcZjoETBWax+NJuN7uBv0TAu47Ft0d2b3H58QVnca5olzSTbhBBA7uYv3qzhWOqndJy3bJsW9xRGl8MzedR7hSsVGWzzaJaY8J5H3qrNWm8tBgk9kGCbE/stlQ2A0CC0HjoNVap7JYOASsZhaWCeb5TwNwR6K1RoVG/gjqCB4Ld0sK0KcMHXqixGQwMyJGR3dcOHeDxWhxD5pEGeFxx/ZXm4JjiCWiRxFkSbs2mWlvMKa3E2ZbYmPyPdTOmvmn7dwTC35jd0nURYqLaOznUqmfVpEA944FXsNVD6eUwbGJUZx1KmThLS7RkykFLi2kOINr9FACqElRei7DWF7KsYB381nVU8M7cTmPh4PGVWhtO/2dGrVG8/iW80lnqdF7gDe/ekta39FPRD7NEa0dfMeYTRV7/U/+qGNxHeP+bk8Yjv/AO5U7KtBIVBz+36LvzBzHohv8R3/APdcOI7z5pWFBT5w5j0/VL545+v7oScSeZ9E04g8z6IsdBj+JHP1SOKHP35II6se/wAgonVD7CWoKDxxTefvyUZxrfYH6ICX+7ppd7ujUFB120G93kFG/abfYH6oIT7um+9SlbHSCOK2iHgsFs1rD91z5jWAN6IewQQbmOpVTGYpwM5Xm8xlcZHgEJhRoRVbElccQRZZ0bUdAAY8yR+B9h5K/TxZLZDHz3scPuE7CibEEAElZvH7YaLMcDHJEMTSxFQEZQxp+qSY8lRZ8NRqfy/JRY0Bn7RJmTOqHYqu0jMLTw7+C2Lfh5vInx/ZdPw6w6t9+SFY20LZbAxtOn2nG7jqezNyjrXtsOMoQNiEXa57TaL5tNOCe7ZtckEPAIv2Ha+ae4rQXqVA0SVCzEg6IfW2NUfGeq+BoKYNMfYk+amw2wI0e/xcfzRuK0WKj+9VKmNDeI8UQGxmntS7qSp6exKQ/AD1Eo0thqQHZtscN7pf7K/s/aFR7oDHNHNwsjFHZzBoweSvU6YGghTjFoi5JgfGYdxaQ5sgi8Xtz5rONOQkNMx5gLfVGBwgjx0I6EaLObY2G8y9m/x4B48rO9D1UmEWZDa7Ifm4OEqgCtLSLHN+VUbcW3rEH8kF2ls51I82HQhU8uNrdcFzFkT29k+GduqRj4eDrdVsM7dXKtQi41CpR7FmXBrqWNECw05pLzOttitmN+P0pLXMvc9FFRPFRJJIBfMK7KSSQHMq7kSSQSEGFd+SUkkgOiiU4YdJJMiPbh1IMOkkmBI3DBO/hxySSQIe3DDkpBhgkkgBfww5eqX8MPZKSSYDf4cd/mU7+GHf5n9Ukk6A6MMO/wD5H9U8YXr/AMj+qSSKIjhhxzd/yd+qc3DAcT4uJSSQBJkSASSUgHgpwcEkkAcLgmuekkgCljcDTqjebvcHCzh0KCY3ZrmNIcRUo6SbObOkjj4JJJEomdxeF+WYF2nRUaz7HokksycUpujQi247ghlYfTxPLmkkktK2Z9H/2Q=="
            alt="프로필 사진"
          />
        </div>
        <div>
          <Name>임우진</Name>
          <Description>202002546</Description>
        </div>
      </Profile>
      <Nav>
        <NavLink to="/">포스트</NavLink>
        <NavLink to="/resume">소개</NavLink>
      </Nav>
      <Outlet />
    </div>
  );
};

export default Layout;
